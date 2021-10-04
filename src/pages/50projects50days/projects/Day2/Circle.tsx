import React from 'react';

import Box from '@mui/material/Box';

interface CircleProps {
  number: number;
}

const Circle: React.FC<CircleProps & { className?: string }> = (props) => {
  const { number, className } = props;
  return (
    <Box
      component="span"
      className={className}
      sx={{
        width: 50,
        height: 50,
        border: '1px solid black',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (theme) => theme.palette.common.white,
        '&.active': {
          borderColor: (theme) => theme.palette.primary.light,
        },
      }}
    >
      {number}
    </Box>
  );
};

export default Circle;
