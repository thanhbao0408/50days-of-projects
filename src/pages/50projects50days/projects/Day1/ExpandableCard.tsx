import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface ExpandableCardProps {
  searchKeys: string[];
}

const ExpandableCard: React.FC<ExpandableCardProps & { className: string }> = (props) => {
  const { searchKeys, className } = props;

  const imageSource = 'https://source.unsplash.com/featured/?' + searchKeys.join(',');
  return (
    <Box
      component="span"
      className={className}
      sx={{
        backgroundImage: `url('${imageSource}')`,
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        height: '100%',
        borderRadius: 16,
        '&:not(.active) > h5': {
          display: 'none',
        },
        cursor: 'pointer',
        transition: 'flex 0.5s ease-in',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: (theme) => theme.palette.grey[50],
          textAlign: 'center',
          backgroundColor: (theme) => theme.palette.primary.main,
          position: 'absolute',
          padding: 1,
          borderRadius: 3,
          top: 16,
        }}
      >
        {searchKeys.join(', ')}
      </Typography>
    </Box>
  );
};

export default ExpandableCard;
