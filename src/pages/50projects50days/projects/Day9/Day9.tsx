import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { deepPurple } from '@mui/material/colors';

import Day9AudioButton from './Day9AudioButton';

interface SoundPlayButton {
  text: string;
  source: string;
}

const soundButtons = [
  {
    text: 'Arcade Retro Game Over',
    url: '/audio/mixkit-arcade-retro-game-over-213.wav',
  },
  {
    text: 'Classic Alarm',
    url: '/audio/mixkit-classic-alarm-995.wav',
  },
  {
    text: 'Flock of Wild',
    url: '/audio/mixkit-flock-of-wild-geese-20.wav',
  },
  {
    text: 'Little Birds Singing',
    url: '/audio/mixkit-little-birds-singing-in-the-trees-17.wav',
  },
  {
    text: 'Wild Lion Animal',
    url: '/audio/mixkit-wild-lion-animal-roar-6.wav',
  },
];

const Day9 = () => {
  const [currentPlayIndex, setCurrentPlayIndex] = useState(-1);

  const soundPlayEvent = (index: number) => {
    // stop the current play
    if (index >= 0 && index < soundButtons.length) {
      setCurrentPlayIndex(index);
    }
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 9 - Sound Board Project
      </Typography>
      <Box
        className="body"
        sx={{
          backgroundColor: deepPurple[500],
          width: '100%',
          height: 'calc(100% - 116px)',
          minHeight: '600px',
          maxHeight: 'calc(100vh - 116px)',
          position: 'relative',
        }}
      >
        <Stack
          className="sound-bar"
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: (theme) => theme.palette.grey[800],
            opacity: 0.75,
            p: 2,
            position: 'relative',
            top: 200,
            margin: 'auto',
            width: 'fit-content',
            maxWidth: 1000,
          }}
        >
          {soundButtons.map((info, index) => {
            return (
              <Day9AudioButton
                key={index}
                {...info}
                index={index}
                currentPlayIndex={currentPlayIndex}
                playEvent={soundPlayEvent}
              ></Day9AudioButton>
            );
          })}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Day9;
