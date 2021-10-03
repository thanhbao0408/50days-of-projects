import React from 'react';

import Box from '@mui/material/Box';

import { NavLink as RouterLink } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { blue } from '@mui/material/colors';

interface SidebarItemProps {
  title: string;
  url: string;
}

const sidebarItems: SidebarItemProps[] = [
  {
    title: 'Introduction',
    url: 'introduction',
  },
  {
    title: 'Day 1',
    url: 'day-1',
  },
  {
    title: 'Day 2',
    url: 'day-2',
  },
  {
    title: 'Day 3',
    url: 'day-3',
  },
  {
    title: 'Day 4',
    url: 'day-4',
  },
  {
    title: 'Day 5',
    url: 'day-5',
  },
  {
    title: 'Day 6',
    url: 'day-6',
  },
  {
    title: 'Day 7',
    url: 'day-7',
  },
  {
    title: 'Day 8',
    url: 'day-8',
  },
  {
    title: 'Day 9',
    url: 'day-9',
  },
  {
    title: 'Day 10',
    url: 'day-10',
  },
];

const SidebarContent = () => {
  return (
    <React.Fragment>
      <List
        sx={{
          overflow: 'auto',
          padding: '8px',
          '& .MuiListItem-root': {
            mt: 0.5,
            borderRadius: 2,
            '&:hover': {
              color: (theme) => theme.palette.primary.main,
              backgroundColor: (theme) => theme.palette.grey[200],
              opacity: 1,
            },
            '&.active, .Mui-selected': {
              backgroundColor: blue[100],
              color: (theme) => theme.palette.primary.main,
              opacity: 1,

              '& .MuiListItemText-primary': {
                fontWeight: (theme) => theme.typography.fontWeightBold,
              },
            },
          },
        }}
      >
        {sidebarItems.map((item, index) => {
          const { title, url } = item;
          return (
            <ListItem button key={index} component={RouterLink} to={url}>
              <ListItemText primary={title} />
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default SidebarContent;
