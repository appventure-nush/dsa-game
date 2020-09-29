import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import GamePage from './GamePage';
import LandingPage from './LandingPage';
import LabPage from './LabPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
        <Switch>
          <Route exact path='/staging-game'>
            <GamePage />
          </Route>
          <Route exact path='/staging-lab'>
            <LabPage />
          </Route>
          <Route path='/'>
            <LandingPage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
