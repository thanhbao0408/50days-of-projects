import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import { deepPurple } from '@mui/material/colors';

const Day4 = () => {
  const [isActive, setIsActive] = useState(false);

  const handlerToggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 4 - Hidden Search Widget
      </Typography>
      <Box
        sx={{
          height: 'calc(100% - 116px)',
          width: '100%',
          backgroundColor: deepPurple[600],
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          className={isActive ? 'active' : ''}
          component="form"
          sx={{
            position: 'absolute',
            right: 'calc(50% - 200px)',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            transition: 'width 0.25s ease-out',
            '&.active': {
              width: 400,
            },
            '&:not(.active)': {
              width: 50,
              '& .MuiDivider-root': {
                display: 'none',
              },
              '& .MuiInputBase-root': {
                // width: 0,
                // ml: 0,
              },
            },
          }}
        >
          <InputBase
            className={isActive ? 'active' : ''}
            placeholder="Search for something"
            inputProps={{ 'aria-label': 'search products' }}
            sx={{
              ml: 0,
              flex: 1,
              width: 0,
              '&.active': {
                // width: '100%',
              },
              transition: 'width 0.5s ease-out',
            }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handlerToggleActive}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default Day4;
