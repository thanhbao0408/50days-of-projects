import React, { useState, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';

interface BoxProps {
  parentScrollPos: number;
}

const AnimationBox: React.FC<BoxProps> = (props) => {
  const boxRef = useRef<HTMLElement>(null);
  const { parentScrollPos } = props;

  const [activeClass, setActiveClass] = useState('active');
  const [isFromLeft, setIsFromLeft] = useState(true);

  useEffect(() => {
    if (boxRef.current) {
      if (parentScrollPos + 40 + 150 - 32 >= boxRef.current?.offsetTop) {
        setActiveClass('active');
      } else {
        console.log('hehe');
        setActiveClass('');
      }
    }
  }, [parentScrollPos]);

  useEffect(() => {
    if (Math.random() >= 0.5) {
      setIsFromLeft(false);
    }
  }, []);

  const boxComp = isFromLeft ? (
    <Box
      ref={boxRef}
      className={activeClass}
      sx={{
        width: 150,
        height: 100,
        lineHeight: '100px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.grey[200],
        position: 'relative',
        left: 0,
        '&.active': {
          left: 0,
        },
        '&:not(.active)': {
          left: `-75%`,
        },
        transition: 'left 0.5s ease-out',
      }}
    >
      Box
    </Box>
  ) : (
    <Box
      ref={boxRef}
      className={activeClass}
      sx={{
        width: 150,
        height: 100,
        lineHeight: '100px',
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 4,
        backgroundColor: (theme) => theme.palette.grey[200],
        position: 'relative',
        right: 0,
        '&.active': {
          right: 0,
        },
        '&:not(.active)': {
          right: `-75%`,
        },
        transition: 'right 0.5s ease-out',
      }}
    >
      Box
    </Box>
  );

  return boxComp;
};

export default AnimationBox;
