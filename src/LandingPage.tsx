import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DescriptionSubpage from './DescriptionSubpage';
import CarouselSubpage from './CarouselSubPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    }
  }),
);

const LandingPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={0}>
      <Hidden smDown>
        <CarouselSubpage/>
      </Hidden>
      <DescriptionSubpage />
    </Grid>
  );
};

export default LandingPage;
