import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { indigo } from '@mui/material/colors';
const Day10 = () => {
  const [jokeContent, setJokeContent] = useState('');

  useEffect(() => {
    handleLoadingDadJoke();
  }, []);

  const handleLoadingDadJoke = () => {
    // load dad jokes
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        }
        throw res;
      })
      .then((data) => setJokeContent(data))
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 10 - Dadjokes
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
        <Card
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px 32px',
            borderRadius: 2,
            margin: 'auto',
            width: '40%',
          }}
        >
          <Typography className="title" variant="h5" textAlign="center" color="gray">
            Don&apos;t Laugh Challenge
          </Typography>
          <Typography className="joke-content" variant="h6" sx={{ my: 3 }}>
            {jokeContent}
          </Typography>
          <Button onClick={handleLoadingDadJoke} variant="contained">
            Get Another Joke
          </Button>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default Day10;
