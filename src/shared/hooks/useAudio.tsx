import React, { useState, useEffect } from 'react';

interface UseAudioProps {
  url: string;
}

// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
const useAudio = (
  props: UseAudioProps,
): { playing: boolean; toggle: () => void; play: () => void; pause: () => void; stop: () => void } => {
  const { url } = props;
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [_stop, setStop] = useState(true);

  const toggle = () => setPlaying(!playing);
  const play = () => {
    setPlaying(true);
    setStop(false);
  };

  const pause = () => {
    setPlaying(false);
  };

  const stop = () => {
    setPlaying(false);
    setStop(true);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    if (_stop) {
      audio.currentTime = 0;
    }
  }, [_stop]);

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setPlaying(false);
      setStop(true);
    });
    return () => {
      audio.removeEventListener('ended', () => {
        setPlaying(false);
        setStop(true);
      });
    };
  }, []);

  return { playing, toggle, play, pause, stop };
};

export default useAudio;
