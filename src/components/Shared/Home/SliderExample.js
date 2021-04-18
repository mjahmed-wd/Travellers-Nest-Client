import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '75%',
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));
export const Example = React.memo(function ReviewCard() {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <div className="container mt-5 mb-5">
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={
          'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        }
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'Bill'}
          heading={'Building Name'}
          body={
            'That year, collection of songs, review melodies, memories full, this is a long and warm TThat year, collection of songs, review melodies, memories full, this is a long and warm That year, collection of songs, review melodies, memories full, this is a long and warm journeyThat year, collection of songs, review melodies, memories full, this is a long and warm of songs, review melodies, memories full, this is a long and warm TThat year, collection of songs, review melodies, memories full, this is a long and warm That year, collection of songs, review melodies, memories full, this is a long and warm journeyThat year, collection of songs, review melodies, memories full, this is a long and warm '
          }
        />
      </CardContent>
    </Card>
    </div>
  );
});

export default Example