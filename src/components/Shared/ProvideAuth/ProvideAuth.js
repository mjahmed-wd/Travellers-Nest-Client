import React from "react";
import firebase from "firebase/app";
import { useState } from "react";
import { useEffect } from "react";
import { firebaseInitialization } from "../Login/FirebaseRefectored";
import { useHistory, useLocation } from "react-router-dom";
import { useContext } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const ProvideAuth = ({ children }) => {
  firebaseInitialization();

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const auth = useProvideAuth();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // refresh JWT token
        firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ false)
          .then(function (idToken) {
            localStorage.setItem("token", idToken);
          })
          .catch(function (error) {
            // Handle error
          });
        // Check Admin Role
        fetch(`https://travellers-nest.herokuapp.com/checkAdminRole/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.length);
            if (data.length) {
              user.role = "Admin";
            } else {
              console.log("Role: User");
              user.role = "User";
            }
            console.log(user?.role);
            setCurrentUser(user);
            setPending(false);
          });
      } else {
        console.log(user?.role);
        setCurrentUser(user);
        setPending(false);
      }
      // console.log(user?.role);
      // setCurrentUser(user);
      // setPending(false);
    });
  }, []);
  // debugger
  // useEffect(() => {
  //   fetch(`https://travellers-nest.herokuapp.com/checkAdminRole/${currentUser.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if(data.length){
  //         currentUser.role="Admin"
  //       }
  //     });

  // }, [currentUser]);

  if (pending) {
    return <h2>Loading</h2>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ProvideAuth;

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  firebaseInitialization();

  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var googleUser = result.user;
        // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        //   localStorage.setItem("token",idToken)
        // }).catch(function(error) {
        //   // Handle error
        // });
        setUser(result.user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const signup = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };
  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };
  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };
  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const newUserInfo = { ...user };
        newUserInfo.name = user.displayName;
        newUserInfo.email = user.email;
        newUserInfo.profilePicture = user.photoURL;
        newUserInfo.isSignedIn = true;
        setUser(newUserInfo);
        console.log("clicked");
      } else {
        setUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
