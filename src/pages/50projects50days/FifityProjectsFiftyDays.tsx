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
          <Route path={parentPath + '/day-3'}>
            <Projects.Day3 />
          </Route>{' '}
          <Route path={parentPath + '/day-4'}>
            <Projects.Day4 />
          </Route>{' '}
          <Route path={parentPath + '/day-5'}>
            <Projects.Day5 />
          </Route>
          <Route path={parentPath + '/day-6'}>
            <Projects.Day6 />
          </Route>
          <Route path={parentPath + '/day-7'}>
            <Projects.Day7 />
          </Route>
          <Route path={parentPath + '/day-8'}>
            <Projects.Day8 />
          </Route>
          <Route path={parentPath + '/day-9'}>
            <Projects.Day9 />
          </Route>
          <Route path={parentPath + '/day-9-5'}>
            <Projects.Day9_5 />
          </Route>
          <Route path={parentPath + '/day-10'}>
            <Projects.Day10 />
          </Route>
          <Route path={parentPath + '/day-11'}>
            <Projects.Day11 />
          </Route>
          <Route path={parentPath + '/day-12'}>
            <Projects.Day12 />
          </Route>
          <Route path={parentPath + '/day-13'}>
            <Projects.Day13 />
          </Route>
          <Route path={parentPath + '/day-14'}>
            <Projects.Day14 />
          </Route>
        </Switch>
      </Box>
      {/* Content */}
    </Box>
  );
};

export default FifityProjectsFiftyDays;
