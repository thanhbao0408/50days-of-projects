import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import { indigo, lime } from '@mui/material/colors';

import { setEasedInterval } from 'shared/utilities/eased-interval';

import Tween from '@tweenjs/tween.js';
import { time } from 'console';

const Day14 = () => {
  const [choicesInputted, setChoicesInputted] = useState<string[]>([]);
  const [isPickingChoice, setIsPickingChoice] = useState<boolean>(false);
  const [randomChoiceIndex, setRandomChoiceIndex] = useState<number>(-1);

  const handleTextInputed = (event: any) => {
    if (isPickingChoice) {
      event.preventDefault();
    }

    if (event.code === 'Enter') {
      event.preventDefault();
      // start picking a random choice
      pickARandomChoice();

      return;
    }

    const value = event.target.value;
    if (!value) return;

    const choicesInputted = value?.split(',') as string[];
    choicesInputted.forEach((choice) => choice.trim());
    setChoicesInputted(choicesInputted);
  };

  const pickARandomChoice = () => {
    if (isPickingChoice) return;
    console.log('Pick A Random Choice');

    // random time
    const pickingTime = (3 + Math.random() * 3) * 1000;

    const tweenTime = { time: 0 };
    let offsetTime = 0;
    let lastTime = 0;

    const tween = new Tween.Tween(tweenTime)
      .to({ time: pickingTime }, pickingTime)
      .easing(Tween.Easing.Cubic.In)
      .onUpdate(() => {
        offsetTime = tweenTime.time - lastTime;
        lastTime = tweenTime.time;
      })
      .start();

    setIsPickingChoice(true);

    const loopTimeout = () => {
      const timeOut = setTimeout(() => {
        tween.update();

        // pick random choice
        const randomIndex = Math.round(Math.random() * (choicesInputted.length - 1));
        setRandomChoiceIndex(randomIndex);

        if (tweenTime.time < pickingTime) {
          loopTimeout();
        } else {
          setIsPickingChoice(false);
        }

        clearTimeout(timeOut);
      }, offsetTime);
    };

    loopTimeout();
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 14 - Random choice maker
      </Typography>

      <Box
        className="body"
        sx={{
          backgroundColor: indigo[300],
          width: '100%',
          height: 'calc(100% - 116px)',
          minHeight: '600px',
          maxHeight: 'calc(100vh - 116px)',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography color="white" variant="h5" noWrap={false} sx={{ maxWidth: 750, width: 750 }} textAlign="center">
            {isPickingChoice
              ? 'RANDOM!!!'
              : "Enter all of the choices divided by a comma (','). Press enter when you're done"}
          </Typography>
          <TextareaAutosize
            minRows={10}
            maxRows={15}
            style={{ width: '100%', resize: 'none' }}
            onKeyPress={handleTextInputed}
          ></TextareaAutosize>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            {choicesInputted.map((choice, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: index === randomChoiceIndex ? lime[900] : lime[400],
                    borderRadius: 2,
                    padding: '4px 8px',
                  }}
                >
                  {choice}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Day14;
