import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Circle from './Circle';

const Day2 = () => {
  const [progress, setProgress] = useState(0);

  const steps = [1, 2, 3, 4];
  const stepLength = 100 / (steps.length - 1);

  const handleUpdateProgress = (step: number) => {
    const updatedProgress = progress + step;
    if (updatedProgress > steps.length - 1 || updatedProgress < 0) return;

    // update progress bar
    setProgress(updatedProgress);

    // update the circle
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 2 - Progress Bar
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          mt: 10,
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Stack direction="row" spacing={10} sx={{ zIndex: 1, position: 'relative' }}>
            {steps.map((num) => (
              <Circle key={num} number={num} className={progress >= num - 1 ? 'active' : ''}></Circle>
            ))}
          </Stack>
          <Box
            className="progress-bar-container"
            sx={{
              zIndex: 0,
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              className="progress-bar"
              sx={{
                width: `${progress * stepLength}%`,
                height: '1px',
                border: '1px solid',
                borderColor: (theme) => theme.palette.primary.light,
                transition: 'width 0.3s ease-out',
              }}
            ></Box>
          </Box>
        </Box>

        <Stack direction="row" spacing={5}>
          <Button
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
            disabled={progress <= 0}
            onClick={handleUpdateProgress.bind(null, -1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            endIcon={<NavigateNextIcon />}
            disabled={progress >= steps.length - 1}
            onClick={handleUpdateProgress.bind(null, 1)}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Day2;
