import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { orange } from '@mui/material/colors';

import RotatingContent from './RotatingContent';
import RotatingNavigation from './RotatingNavigation';

const Day3 = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const angleRotate = '10deg';

  const handleActiveNavigation = (isActive: boolean) => {
    setIsNavActive(isActive);
  };

  return (
    <React.Fragment>
      <Box sx={{ border: '1px solid black', overflow: 'hidden', position: 'relative', height: '90%' }}>
        <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
          Day 3 - Rotating Navigation
        </Typography>
        <Box mt={5} sx={{ overflow: 'hidden', backgroundColor: orange[800], height: '100%' }}>
          <RotatingContent
            sx={{
              height: '100%',
              transformOrigin: 'top left',
              backgroundColor: (theme) => theme.palette.common.white,
              mb: 0,
              zIndex: 1,
              position: 'relative',
              transition: 'transform 0.5s ease-out',
              '&.active': {
                transform: `rotate(-${angleRotate})`,
              },
            }}
            className={isNavActive ? 'active' : ''}
          ></RotatingContent>
        </Box>
        {/* Rotating Button */}
        <Box
          className={isNavActive ? 'active' : ''}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            borderRadius: '50%',
            transition: 'transform 0.5s ease-out',
            zIndex: 2,
            '&.active': {
              transform: 'rotate(-90deg)',
            },
          }}
        >
          <IconButton
            aria-label="open-menu"
            sx={{
              color: (theme) => theme.palette.common.white,
              position: 'absolute',
              bottom: '35px',
              right: '35px',
            }}
            onClick={handleActiveNavigation.bind(null, true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="close-menu"
            sx={{
              color: (theme) => theme.palette.common.white,
              position: 'absolute',
              bottom: '35px',
              left: '35px',
            }}
            onClick={handleActiveNavigation.bind(null, false)}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        {/* Rotating Button */}
        {/* Rotating Navigation */}
        <RotatingNavigation
          className={isNavActive ? 'active' : ''}
          angleRotate={angleRotate}
          sx={{
            height: 'calc(100% - 100px)',
            width: '100px',
            position: 'absolute',
            left: '0',
            top: '40px',
            mt: '60px',
            transformOrigin: 'top right',
            '&.active': {
              transform: `rotate(-${angleRotate})`,
            },
          }}
        />
        {/* Rotating Navigation */}
      </Box>
    </React.Fragment>
  );
};

export default Day3;
