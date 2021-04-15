import React from 'react';
import { useContext } from 'react';
import { AuthContext, useAuth } from '../ProvideAuth/ProvideAuth';

const Pass = () => {
    const {currentUser,auth}=useContext(AuthContext)
    // const auth = useAuth();
    return (
        <div>
            {
                currentUser?.email
            }
            <button onClick={()=>auth.signout()}>Log Out</button>
        </div>
    );
};

export default Pass;