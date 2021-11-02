import React, { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { indigo } from '@mui/material/colors';

const giphyGetImages = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC';
const timeToGetGifs = 2 * 60 * 1000;
const timeToAnimateKamoji = 500;
const width = 1632 / 8;
const height = 847 / 8;
const kaomojisArray = [
  'ヽ(*・ω・)ﾉ	',
  '٩(◕‿◕｡)۶',
  '＼(٥⁀▽⁀ )／',
  '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧	',
  'ヽ(*・ω・)ﾉ	',
  'ヽ(>∀<☆)ノ	',
  '(´｡• ᵕ •｡`) ♡	',
  '(*¯ ³¯*)♡	',
  '(´｡• ω •｡`) ♡	',
  '♡＼(￣▽￣)／♡',
];

const Day12 = () => {
  const [imgSrcArray, setImgSrcArray] = useState([
    'https://media1.giphy.com/media/3ofT5QaQqhEXFFpRAc/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/iIeVVsY98sLKMDThw0/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/2sYczvMX0YH6IJMtqK/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/LLdXxpXdGsmVtqMhn7/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/3o6wrvMzabLodnuzxm/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/xUySTP0EsjnbZPSpXO/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/3o6MbhiL5EmJE6rI6k/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/xUNd9ET828zngURjLW/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/2SYigz8YQzJXkypCdU/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/4ZvaXFr2Yv8nP9NauM/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/i2S3UNqd6o9jNiWjwZ/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/p7vZMoKTU4TyQ92A8L/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/H3fLCjMJi2Z769ARsF/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/jmphxHznc7wBmsuaW1/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/Bqj3dpDeyBu6qYszc0/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/103TSAa8GEBG5a/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/5zdxuhInPjpC6DtpdI/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/SL8wgQJxUJKzEef2Pi/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media4.giphy.com/media/LpW9yrJuMyIYVn03lt/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media1.giphy.com/media/3ohzdM20ZkkcpGzcTm/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/ISCSLTFXD7fay4nD8Z/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/kxltFksyyLYTH0L0gv/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/88j2Pk56j6M3pHViGD/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media0.giphy.com/media/UQsRTH1deFrPTvXIo6/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/xT9IgLnIFmCv6XhGKc/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/xUySTxYisZ7c3j7D1e/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media3.giphy.com/media/3gJ6eW8VvhBh6/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
    'https://media2.giphy.com/media/ITyKm19HfLAd6GM8y3/giphy.gif?cid=e1bb72ffggjvldwrq36skmzc5bpg3r4unkrwl5mw1ou7gizk&rid=giphy.gif&ct=g',
  ]);
  const [kaomojisText, setKaomojiText] = useState('');

  useEffect(() => {
    // fetch image interval
    const fetchImgsInterval = setInterval(() => {
      getGiphyImage();
    }, timeToGetGifs);

    const getGiphyImage = async () => {
      const url = new URL(giphyGetImages);
      const offset = Math.round(Math.random() * 100);

      const params = [
        ['api_key', 'dc6zaTOxFJmzC'],
        ['offset', offset.toString()],
        ['q', 'cheer+up+love+hug'],
        ['limit', '28'],
      ];

      url.search = new URLSearchParams(params).toString();

      fetch(url.toString(), {
        headers: {
          'Retry-After': '120000',
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          const imgSrc = data.data.map((gif: any) => gif.images.original.url);
          setImgSrcArray(imgSrc);
        })
        .catch((error) => console.error(error));
    };

    getGiphyImage();

    return () => {
      clearInterval(fetchImgsInterval);
    };
  }, []);

  useEffect(() => {
    // fetch image interval
    const updateKaomojiAnimation = setInterval(() => {
      let _kaomojisText = '';
      const numberOfKaomoji = 18;
      for (let index = 0; index < numberOfKaomoji; index++) {
        const randomIndex = Math.round(Math.random() * kaomojisArray.length) - 1;
        const randomKaomoji = kaomojisArray[randomIndex];
        if (randomKaomoji) {
          _kaomojisText += randomKaomoji;
        }
      }
      setKaomojiText(_kaomojisText);
    }, timeToAnimateKamoji);

    return () => {
      clearInterval(updateKaomojiAnimation);
    };
  }, []);

  const claculateXY = (index: number) => {
    if (index <= 7) {
      return {
        x: index,
        y: 0,
      };
    } else if (index > 7 && index <= 14) {
      return {
        x: 7,
        y: index - 7,
      };
    } else if (index > 14 && index <= 21) {
      return {
        x: 7 - (index - 14),
        y: 7,
      };
    } else {
      return {
        x: 0,
        y: 7 - (index - 21),
      };
    }
  };

  return (
    <Box
      className="body"
      sx={{
        backgroundColor: indigo[400],
        width: '100%',
        height: 'calc(100% - 116px)',
        minHeight: '600px',
        maxHeight: 'calc(100vh - 60px)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* GIF Grid */}
      {imgSrcArray.map((imgSrc, index) => {
        const { x, y } = claculateXY(index);
        return (
          <Box
            key={index}
            sx={{
              width: 'calc(100%/8)',
              height: 'calc(100%/8)',
              position: 'absolute',
              left: `calc(100%/8*${x})`,
              top: `calc(100%/8*${y})`,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={imgSrc}
              alt="NMC"
              sx={{
                width: '100%',
              }}
            />
          </Box>
        );
      })}

      <Box component="main">
        <Typography textAlign="center" variant="h2" color="white" sx={{ fontWeight: 'bold' }}></Typography>
        <Box>
          <Typography noWrap color="white" variant="h4">
            {kaomojisText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Day12;
