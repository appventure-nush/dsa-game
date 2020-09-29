import React from 'react';
// import GamePage from './GamePage';
import { Typography, Grid, CssBaseline, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AlertDialog from './AlertDialogButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
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
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
    <CssBaseline />
    <Grid container className={classes.root} spacing={0}>
      <Grid item container xs sm className={classes.container} justify='center' alignItems='stretch' alignContent='center'>
        <Grid item xs={10}>
          <Typography variant='h2'>
            NUS High School <br />
            DSA Preview
          </Typography>
        </Grid>
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
      </Grid>
      <Hidden smDown>
      <Grid item xs={12} sm={6} style={{height: '100vh'}}>

      </Grid>
      </Hidden>
    </Grid>
    </>
  );
};

export default App;
