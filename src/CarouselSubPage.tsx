import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Carousel } from 'antd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    carousel: {
      background: '#002329',
    },
    imageByHeight: {
      marginLeft: '50%',
      transform: 'translateX(-50%)',
      height: '100vh',
      objectFit: 'cover'
    },
    imageByWidth: {
      width: '100vh',
    },
  }),
);

interface OwnProps {
  constraintByWidth?: Boolean;
}

const CarouselSubpage: React.FC<OwnProps> = props => {
  const classes = useStyles();
  const images = [
    'carouselImages/NUSH1.png',
    'carouselImages/NUSH2.png',
    'carouselImages/NUSH4.png'
  ]
  return (
    <Grid item xs={12} sm={8}>
      <Carousel autoplay dots={false} effect='fade' className={classes.carousel}>
        {images.map((item, i) =>
          <img key={i} alt={`CarouselImage${i}`} src={item} className={props.constraintByWidth ? classes.imageByWidth : classes.imageByHeight} />
        )}
      </Carousel>
    </Grid>
  );
};

export default CarouselSubpage;
