import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";

const BlogSection = () => {
  const styles = useBlogTextInfoContentStyles();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <Box maxWidth={343}>
            <CardContent>
              <TextInfoContent
                useStyles={useBlogTextInfoContentStyles}
                overline={"28 MAR 2021"}
                heading={"Sylhet The Blessed Town"}
                body={
                  "Sylhet is a city in eastern Bangladesh, on the Surma River. It’s known for its Sufi shrines, like the ornate tomb and mosque of 14th-century saint Hazrat Shah Jalal, now a major pilgrimage site near Dargah Gate. The tiny Museum of Rajas contains belongings of the local folk poet Hasan Raja. A 3-domed gateway stands at the 17th-century Shahi Eidgah, a huge open-air hilltop mosque built by Emperor Aurangzeb."
                }
              />
              <Button className={styles.button}>Read more</Button>
            </CardContent>
          </Box>
        </div>
        <div className="col-md-4 col-sm-12">
          <Box maxWidth={343}>
            <CardContent>
              <TextInfoContent
                useStyles={useBlogTextInfoContentStyles}
                overline={"28 MAR 2020"}
                heading={"World's longest beach"}
                body={
                  "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island."
                }
              />
              <Button className={styles.button}>Read more</Button>
            </CardContent>
          </Box>
        </div>
        <div className="col-md-4 col-sm-12">
          <Box maxWidth={343}>
            <CardContent>
              <TextInfoContent
                useStyles={useBlogTextInfoContentStyles}
                overline={"28 MAR 2019"}
                heading={"Sundarbans The biggest mangrove forest"}
                body={
                  "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh."
                }
              />
              <Button className={styles.button}>Read more</Button>
            </CardContent>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
