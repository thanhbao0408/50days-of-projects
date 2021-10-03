import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Route, Switch, Redirect } from 'react-router-dom';

import customTheme from './ui/customTheme';

import FifityProjectsFiftyDays from './pages/50projects50days/FifityProjectsFiftyDays';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {/* The rest of your application */}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/50projects50days/" />
        </Route>
        <Route path="/50projects50days">
          <FifityProjectsFiftyDays />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
