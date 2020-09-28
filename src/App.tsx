import React from 'react';
// import GamePage from './GamePage';
import Grid from '@material-ui/core/Grid';
import { CssBaseline, Typography } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Grid container justify='center' alignItems='center' style={{height: '100vh'}}>
        {/* <Grid item xs={8}>
          <Container>
            <GamePage />
          </Container>
        </Grid> */}
        <Grid item xs={8}>
          <Typography style={{wordWrap: 'break-word'}}>
            <code>
              import joinnush <br/>
              turtle.experiment(python) <br/>
              turtle.explore(programming) <br/>
              turtle.excel(CS) <br/>
            </code>
            Learn to command your very own digital turtle with the Python programming language. you will find out more about computer science; learn how to use Python to create graphics involving shapes, patterns and text.More importantly, you will learn some fundamental programming concepts such as variables, functions and iterations. <br/>
            Wow your friends with your amazing animations and your new found "superpower"!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
