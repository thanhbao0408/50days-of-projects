import React from 'react';

import Box from '@mui/material/Box';
import { SxProps } from '@mui/system';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

interface RotatingNavigationProps {
  sx?: SxProps;
  angleRotate: string;
}

const RotatingNavigation: React.FC<RotatingNavigationProps & { className: string }> = (props) => {
  const { sx, angleRotate, className } = props;
  return (
    <Box sx={{ ...sx }}>
      <Box
        className={className}
        sx={{
          transformOrigin: 'top right',
          // backgroundColor: 'red',
          width: '100px',
          height: '100%',
          zIndex: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          transition: 'transform 0.5s ease-out',
          ':not(.active)': {
            transform: `rotate(${angleRotate})`,
          },
        }}
      >
        <Stack
          sx={{
            mb: 5,
            '& .MuiButton-text': {
              color: (theme) => theme.palette.common.white,
            },
          }}
          alignItems="flex-start"
        >
          <Button variant="text" startIcon={<HomeOutlinedIcon />}>
            Home
          </Button>
          <Button variant="text" startIcon={<CreateOutlinedIcon />} sx={{ ml: 1 }}>
            Blog
          </Button>
          <Button variant="text" startIcon={<ContactPageOutlinedIcon />} sx={{ ml: 2 }}>
            Contact
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RotatingNavigation;
