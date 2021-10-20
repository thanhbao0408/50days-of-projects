import React, { useState, useEffect } from 'react';

interface UseAudioProps {
  url: string;
  isFadeInOut: boolean;
}

export async function adjustVolume(
  element: HTMLMediaElement,
  newVolume: number,
  {
    duration = 1000,
    easing = swing,
    interval = 13,
  }: {
    duration?: number;
    easing?: typeof swing;
    interval?: number;
  } = {},
): Promise<void> {
  const originalVolume = element.volume;
  const delta = newVolume - originalVolume;

  if (!delta || !duration || !easing || !interval) {
    element.volume = newVolume;
    return Promise.resolve();
  }

  const ticks = Math.floor(duration / interval);
  let tick = 1;

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      element.volume = originalVolume + easing(tick / ticks) * delta;

      if (++tick === ticks + 1) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
}

export function swing(p: number) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

// https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
const useAudio = (
  props: UseAudioProps,
): { playing: boolean; toggle: () => void; play: () => void; pause: () => void; stop: () => void } => {
  const { url, isFadeInOut } = props;
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [_stop, setStop] = useState(true);

  const toggle = () => setPlaying(!playing);
  const play = async () => {
    if (isFadeInOut) {
      audio.volume = 0;
      await adjustVolume(audio, 1, { duration: 750, easing: swing, interval: 10 });
    }
    setPlaying(true);
    setStop(false);
  };

  const pause = async () => {
    if (isFadeInOut) {
      await adjustVolume(audio, 0, { duration: 750, easing: swing, interval: 10 });
    }
    setPlaying(false);
  };

  const stop = async () => {
    if (isFadeInOut) {
      await adjustVolume(audio, 0, { duration: 750, easing: swing, interval: 10 });
    }
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
