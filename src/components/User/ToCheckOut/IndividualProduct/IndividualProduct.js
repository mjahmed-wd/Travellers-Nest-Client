import React, {  useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import cx from "clsx";
import Header from "../../../Shared/Header/Header"
import Footer from "../../../Shared/Footer/Footer"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { useGradientBtnStyles } from "@mui-treasury/styles/button/gradient";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "75%",
    margin: "auto",
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

const IndividualProduct = () => {
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  const history = useHistory();
  // const { displayName: userName, photoURL, email } = currentUser;
  const { id } = useParams();
  const [property, setProperty] = useState({});
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/property/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }, [id]);
  const {
    name,
    address,
    country,
    price,
    description,
    imageURL,
  } = property;
  const placeOrder = () => {
    localStorage.setItem("propertyID", id);
    history.push("/checkout");
  };
  return (
    <>
    <Header/>
      {property?.name && (
        <>
          {" "}
          <div className="container mt-5 mb-5">
            <Card className={cx(styles.root, shadowStyles.root)}>
              <CardMedia
                className={cx(styles.media, mediaStyles.root)}
                image={imageURL}
              />
              <CardContent>
                <TextInfoContent
                  classes={textCardContentStyles}
                  overline={`${price}$ per day`}
                  heading={`${name} - ${address}, ${country}`}
                  body={`${description}`}
                />
                <div className="text-center mt-3">
                  <Button
                    classes={chubbyStyles}
                    onClick={() => placeOrder()}
                    type="submit"
                  >
                    Place Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
      <Footer/>
    </>
  );
};

export default IndividualProduct;
