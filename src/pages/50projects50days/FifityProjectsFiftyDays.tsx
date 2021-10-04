import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import DashboardLayout from '../../ui/DashboardLayout';
import SideBarContent from './SidebarContent';

import Projects from './projects';

const parentPath = '/50projects50days';

const FifityProjectsFiftyDays = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Layout */}
      <DashboardLayout>
        <SideBarContent />
      </DashboardLayout>
      {/* Layout */}

      {/* Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', overflow: 'auto' }}>
        <Toolbar />
        <Switch>
          <Route path={parentPath} exact>
            <Redirect to={parentPath + '/introduction'} />
          </Route>
          <Route path={parentPath + '/introduction'}>
            <Projects.Day0_Introduction />
          </Route>
          <Route path={parentPath + '/day-1'}>
            <Projects.Day1 />
          </Route>
          <Route path={parentPath + '/day-2'}>
            <Projects.Day2 />
          </Route>
        </Switch>
      </Box>
      {/* Content */}
    </Box>
  );
};

export default FifityProjectsFiftyDays;
