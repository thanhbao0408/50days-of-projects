import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { deepPurple, grey } from '@mui/material/colors';
import Button from '@mui/material/Button';

interface BoxProps {
  backgroundUrl: string;
  colorOverlay: string;
  title: string;
}

const boxes: BoxProps[] = [
  {
    backgroundUrl:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format',
    colorOverlay: deepPurple[500],
    title: 'Playstaytion 5',
  },
  {
    backgroundUrl:
      'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format',
    colorOverlay: grey[300],
    title: 'Xbox One',
  },
];

const Day7 = () => {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 7 - Split Landing Page{' '}
      </Typography>

      <Box className="container" sx={{ width: '100%', height: '100%', display: 'flex' }}>
        {boxes.map((box, index) => (
          <Box
            key={index}
            sx={{
              background: `url(${box.backgroundUrl})`,
              backgroundSize: 'cover',
              width: '50%',
              height: '100%',
              position: 'relative',
              color: (theme) => theme.palette.common.white,
              '&:hover': {
                width: '90%',
              },
              transition: 'width 0.3s ease-in',
            }}
          >
            <Box
              className="color-overlay"
              sx={{
                backgroundColor: box.colorOverlay,
                opacity: 0.5,
                width: '100%',
                height: '100%',
                position: 'absolute',
              }}
            ></Box>
            <Typography
              variant="h2"
              color="#000"
              sx={{
                textAlign: 'center',
                lineHeight: '250px',
                fontWeight: (theme) => theme.typography.fontWeightMedium,
              }}
            >
              {box.title}
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                display: 'flex',
                margin: 'auto',
                width: 150,
                height: 50,
                borderRadius: 0,
                borderWidth: 2,
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
            >
              BUY NOW
            </Button>
          </Box>
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Day7;
