import React from 'react';
import { Typography, Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AlertDialog from './AlertDialogButton';
import CarouselSubpage from './CarouselSubPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    code: {
      background: '#000000',
      color: '#ffffff',
      fontFamily: 'Consolas',
      fontSize: '21px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '30px',
      display: 'inline-block',
      padding: theme.spacing(1, 1),
      margin: theme.spacing(1, 0)
    },
    container: {
      background: '#009a90',
      color: '#ffffff',
      padding: theme.spacing(5, 0),
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    credits: {
      marginTop: '25px'
    }
  }),
);

const DescriptionSubpage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item container xs sm className={classes.container} justify='center' alignItems='stretch' alignContent='flex-start'>
      <Grid item xs={10}>
        <Typography variant='h3' style={{color: '#fff'}}>
          NUS High School <br />
          DSA Preview <br />
          (Computer Science)
        </Typography>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={11}>
          <CarouselSubpage constraintByWidth/>
        </Grid>
      </Hidden>
      <Grid item xs={10}>
        <Typography className={classes.code}>
          import joinnush <br/>
          turtle.experiment(python) <br/>
          turtle.explore(programming) <br/>
          turtle.excel(CS)
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          The Worldwide Information Security and Engineering Research organisation protects the world against the threat of cyber terrorism. One day, a hacker damages WISER's servers, ravages their modules and puts the world in grave danger. Only you, an agent of computer science, can stop him and save WISER from evil.
          <br/><br/>

          Command your very own digital turtle with the Python programming language.
          Learn fundamental programming concepts such as variables, functions and iterations.
          Wow your friends with your amazing animations and your newfound computer science powers!
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <AlertDialog>
          Click to save Wiser!
        </AlertDialog>
      </Grid>
      <Grid item xs={10} container className={classes.credits} alignItems='center' spacing={2}>
        <Grid item>
          <Typography variant='caption'>
            Brought to you by:
          </Typography>
        </Grid>
        <br />
        <Grid item>
          <a href='https://nushigh.edu.sg'>
            <img height='60em' src='nush_logo.png' alt='nush logo'/>
          </a>
        </Grid>
        <Grid item>
          <a href='https://nush.app'>
            <img height='60em' src='appventure_logo.png' alt='appventure logo'/>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DescriptionSubpage;
