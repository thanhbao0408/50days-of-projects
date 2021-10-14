import React, { useCallback, useEffect } from 'react';

import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';

import useAudio from 'shared/hooks/useAudio';

interface Day9AudioButtonProps {
  index: number;
  currentPlayIndex: number;
  text: string;
  url: string;
  playEvent: (index: number) => void;
}

const Day9AudioButton: React.FC<Day9AudioButtonProps> = (props) => {
  const { index, currentPlayIndex, text, url, playEvent } = props;
  const { playing, play, stop } = useAudio({ url });

  useEffect(() => {
    if (playing && index !== currentPlayIndex) {
      stop();
    }
  }, [currentPlayIndex]);

  const toggleAudioHandler = useCallback(() => {
    if (playing) {
      stop();
    } else {
      play();
      playEvent(index);
    }
  }, [playing]);

  return (
    <Button
      className="sound-button"
      endIcon={playing ? <StopCircleIcon /> : <PlayCircleIcon />}
      onClick={toggleAudioHandler}
      variant="contained"
      sx={{
        color: (theme) => theme.palette.common.white,
        maxWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        '& .MuiButton-endIcon': {
          ml: 0,
          '> .MuiSvgIcon-root': {
            fontSize: 36,
          },
        },
      }}
    >
      {text}
    </Button>
  );
};

export default Day9AudioButton;
