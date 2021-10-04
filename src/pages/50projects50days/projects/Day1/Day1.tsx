import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { ExpandableCardProps } from './ExpandableCard';
import ExpandableCard from './ExpandableCard';

const imagesInfo: ExpandableCardProps[] = [
  {
    searchKeys: ['Gaming', 'Setup'],
  },
  {
    searchKeys: ['Developer', 'Setup'],
  },
  {
    searchKeys: ['Website', 'Design'],
  },
  {
    searchKeys: ['Beach', 'Ocean'],
  },
  {
    searchKeys: ['Dawn', 'Jungle'],
  },
];

const Day1 = () => {
  const handleCardClick = (event: any) => {
    const target = event.target as HTMLElement;
    if (target && target.classList.contains('expandable-card')) {
      // parent
      const stackParent = target.closest('div');
      const allCards = stackParent?.querySelectorAll('.expandable-card');
      if (allCards) {
        allCards.forEach((card) => card.classList.remove('active'));
      }
      target.classList.add('active');
    }
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 1 - Expanding Cards
      </Typography>
      <Stack
        direction="row"
        alignItems="stretch"
        spacing={1}
        sx={{
          height: '80%',
          '& > span': {
            flex: 0.5,
            '&.active': {
              flex: 5,
            },
          },
        }}
        onClick={handleCardClick}
      >
        {imagesInfo.map((info, index) => {
          let classes = 'expandable-card';
          if (index == 0) {
            classes += ' active';
          }
          return <ExpandableCard key={index} className={classes} searchKeys={info.searchKeys} />;
        })}
      </Stack>
    </React.Fragment>
  );
};

export default Day1;
