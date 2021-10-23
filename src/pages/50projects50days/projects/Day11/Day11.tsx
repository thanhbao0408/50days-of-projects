import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { indigo, lime } from '@mui/material/colors';

interface KeycodeCardProps {
  eventName: string;
  keyEventCaptureResult: (event: KeyboardEvent | any) => string;
}

const keyCodeEvents: KeycodeCardProps[] = [
  {
    eventName: 'event.key',
    keyEventCaptureResult: (event: KeyboardEvent | any) => {
      return event?.key;
    },
  },
  {
    eventName: 'event.location',
    keyEventCaptureResult: (event: KeyboardEvent | any) => {
      return event?.location.toString();
    },
  },
  {
    eventName: 'event.which',
    keyEventCaptureResult: (event: KeyboardEvent | any) => {
      return event?.which.toString();
    },
  },
  {
    eventName: 'event.code',
    keyEventCaptureResult: (event: KeyboardEvent | any) => {
      return event?.code;
    },
  },
];

const Day11 = () => {
  const [keyboardEvent, setKeyboardEvent] = useState<KeyboardEvent | null>(null);
  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      setKeyboardEvent(event);
    });
  }, []);

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 11 - Keycode
      </Typography>

      <Box
        className="body"
        sx={{
          backgroundColor: indigo[400],
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
        <Stack direction="row" spacing={2}>
          {keyCodeEvents.map((info, index) => {
            return (
              <Card key={index}>
                <CardHeader
                  title={info.eventName}
                  sx={{
                    backgroundColor: (theme) => theme.palette.grey[700],
                    '& .MuiCardHeader-root': {},
                    '& .MuiCardHeader-title': {
                      fontSize: (theme) => theme.typography.body1.fontSize,
                      color: lime['A200'],
                    },
                  }}
                ></CardHeader>
                <CardContent>
                  <Typography textAlign="center">{info.keyEventCaptureResult(keyboardEvent)}</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Day11;
