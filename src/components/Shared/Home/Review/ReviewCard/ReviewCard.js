import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import LocationOn from "@material-ui/icons/LocationOn";
import Favorite from "@material-ui/icons/Favorite";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "initial",
    maxWidth: 304,
    backgroundColor: "transparent",
  },
  title: {
    marginBottom: 0,
  },
  rateValue: {
    fontWeight: "bold",
    marginTop: 2,
  },
  content: {
    position: "relative",
    padding: 24,
    margin: "-24% 16px 0",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  favorite: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
}));

const ReviewCard = ({ singleReview }) => {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });

  const { name, review } = singleReview;
  return (
    <div className="col-md-3 col-sm-12 mb-5">
      <div className="d-flex justify-content-center ">
      <Card elevation={0} className={styles.root}>
        <CardMedia
          classes={mediaStyles}
          style={{width:"100%"}}
          image={
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          }
        />
        <CardContent className={cx(shadowStyles.root, styles.content)}>
          <IconButton className={styles.favorite}>
            <Favorite />
          </IconButton>
          <h3 className={styles.title}>{name}</h3>
          <Box color={"grey.500"} display={"flex"} alignItems={"center"} mb={1}>
            <LocationOn className={styles.locationIcon} />
            <span>Checked In</span>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            mb={1}
            className={gutterStyles.parent}
          >
            {/* <Rating name={"rating"} value={5} size={"small"} />
            <Typography variant={"body2"} className={styles.rateValue}>
              5.0
            </Typography> */}
          </Box>
          <Typography color={"textSecondary"} variant={"body2"}>
            {review}
          </Typography>
          <Box
            mt={2}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          ></Box>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default ReviewCard;
