import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Day5 = () => {
  const [blurPercent, setBlurPercent] = useState(0);

  // https://dmitripavlutin.com/react-useeffect-explanation/
  // Just want to run the interval once only, so I pass the empty array [] as dependency
  // useState's functional updates: If the new state is computed using the previous state, you can pass a function to setState.
  // Note: https://stackoverflow.com/questions/58133327/react-useeffect-with-usestate-and-setinterval
  // (If you don't pass anything, the useEffect's callback will be triggered so then it create another interval,
  // but we put the clearInterval as the return of the useEffect, the interval would be clear, i.e. it stops running,
  // and after the component re-render, the interval's callback would run again, it use setState callback so the result would be the same. it means after any re-render, the setState is call. console.log(interval) to notice the differences)

  useEffect(() => {
    const interval = setInterval(() => {
      setBlurPercent((blurPercent) => {
        if (blurPercent >= 100) {
          clearInterval(interval);
          return 100;
        }
        return blurPercent + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  const calculateImageBlur = () => {
    // map the blurPercent ( 0 - 100) to (0 - 30)
    // but in reverse
    return scale(blurPercent, 0, 100, 30, 0);
  };

  const calculateTextOpacity = () => {
    // map the blurPercent ( 0 - 100) to (0 - 1)
    // but in reverse
    return scale(blurPercent, 0, 100, 1, 0);
  };

  // #region helpers
  const scale = (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
  // #endregion

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 5 - Blurry Loading
      </Typography>
      <Box component="main" className="blurry-container" sx={{ height: '100%', position: 'relative' }}>
        <Box
          component="img"
          className="blurry-image"
          sx={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1633451530793-20022c80d10d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%',
            filter: `blur(${calculateImageBlur()}px)`,
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: -1,
          }}
        ></Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            zIndex: 0,
            position: 'absolute',
            top: 'calc(50% - 26px)',
            width: '100%',
            color: (theme) => theme.palette.common.white,
            opacity: calculateTextOpacity(),
          }}
        >
          {blurPercent}%
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Day5;
