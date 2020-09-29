import React from 'react';
import { Typography, Grid, Hidden, CssBaseline } from '@material-ui/core';
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
      padding: theme.spacing(10, 0),
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
    <>
    <CssBaseline />
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
          import joinnush <br/>
          turtle.experiment(python) <br/>
          turtle.explore(programming) <br/>
          turtle.excel(CS)
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          In the near future, the Worldwide Information Security and Engineering Research organisation is the world's protection against the dark threat of cyber terrorism.  Only the most elite computer scientists could dream of playing a part in safeguarding software and data all over the world. But one day, a hacker successfully breached WISER's firewalls, damaged their servers and ravaged their modules. Only you, an agent of computer science, can put a stop to the hacker's schemes and save WISER and all who depend on it.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <AlertDialog>
          Click to save Wiser!
        </AlertDialog>
      </Grid>
      <Grid item xs={10} className={classes.credits}>
        <Typography variant='caption'>
          Brought to you by:
          &nbsp; &nbsp;
          <a href='https://nushigh.edu.sg'>
            <img height='75px' src='nush_logo.png' alt='nush logo'/>
          </a>
          &nbsp; &nbsp;
          <a href='https://nush.app'>
            <img height='75px' src='appventure_favicon.ico' alt='appventure logo'/>
          </a>
        </Typography>
      </Grid>
    </Grid>
    </>
  );
};

export default DescriptionSubpage;
