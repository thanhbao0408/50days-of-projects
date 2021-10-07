import React, { useState, useRef, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import AnimationBox from './AnimationBox';

const Day6 = () => {
  const stackRef = useRef<HTMLElement>(null);
  const [stackScrollTop, setStackScrollTop] = useState(0);

  useEffect(() => {
    if (stackRef && stackRef.current) {
      setStackScrollTop(stackRef?.current?.clientHeight);
    }
  }, []);

  const handleScrolling = (event: any) => {
    if (stackRef.current) {
      setStackScrollTop(stackRef.current?.scrollTop + stackRef.current.clientHeight);
    }
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 6 - Scroll to Appear animation
      </Typography>
      <Stack
        ref={stackRef}
        className="box-contaner"
        alignItems="center"
        spacing={2}
        onScroll={handleScrolling}
        sx={{
          height: 'calc(100% - 116px)',
          overflow: 'auto',
          py: 5,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((p) => (
          <AnimationBox key={p} parentScrollPos={stackScrollTop}></AnimationBox>
        ))}
      </Stack>
    </React.Fragment>
  );
};

export default Day6;
