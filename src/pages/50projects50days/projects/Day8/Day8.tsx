import React, { useRef, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import { deepPurple } from '@mui/material/colors';

interface FormField {
  label: string;
  fieldAlias: string;
  inputType: string;
}

const loginFormFields: FormField[] = [
  {
    label: 'Email',
    fieldAlias: 'email',
    inputType: 'text',
  },
  {
    label: 'Password',
    fieldAlias: 'password',
    inputType: 'password',
  },
];

const Day8 = () => {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 8 - Form wave animation
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
        <Box
          className="form-container"
          sx={{
            width: '400px',
            height: '500px',
            position: 'absolute',
            top: 'calc(50% - 300px)',
            left: 'calc(50% - 250px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.grey[800],
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: 0.75,
              zIndex: 0,
            }}
          ></Box>
          <Box
            component="form"
            autoComplete="off"
            sx={{
              display: 'flex',
              height: '100%',
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Typography color="white" variant="h4" sx={{ zIndex: 1 }}>
              Please login
            </Typography>
            {loginFormFields.map((field, index) => {
              const { label, fieldAlias, inputType } = field;
              const labelRef = useRef<HTMLElement>(null);
              const inputRef = useRef<HTMLInputElement>(null);

              useEffect(() => {
                if (inputRef.current) {
                  if (!inputRef.current?.value) {
                    if (labelRef.current) {
                      const labelCharElements = labelRef.current?.querySelectorAll('span');
                      labelCharElements.forEach((element) => element.classList.remove('focus'));
                    }
                  }
                }
              }, []);

              const onInputFocus = () => {
                if (labelRef.current) {
                  const labelCharElements = labelRef.current?.querySelectorAll('span');
                  labelCharElements.forEach((element) => element.classList.add('focus'));
                }
              };

              const onInputBlur = () => {
                if (labelRef.current) {
                  if (inputRef.current) {
                    if (inputRef.current?.value) {
                      return;
                    }
                  }
                  const labelCharElements = labelRef.current?.querySelectorAll('span');
                  labelCharElements.forEach((element) => element.classList.remove('focus'));
                }
              };

              return (
                <Box
                  key={index}
                  className="form-control"
                  sx={{
                    position: 'relative',
                    mt: 6,
                  }}
                >
                  <Box
                    component="input"
                    ref={inputRef}
                    autoComplete="false"
                    type={inputType}
                    id={fieldAlias}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    sx={{
                      background: 'none',
                      border: 'none',
                      borderBottom: 'solid 2px',
                      borderBottomColor: (theme) => theme.palette.common.white,
                      pb: 1,
                      pl: 1,
                      color: (theme) => theme.palette.common.white,
                      fontSize: (theme) => theme.typography.h5.fontSize,
                    }}
                  ></Box>
                  <Box
                    component="label"
                    ref={labelRef}
                    htmlFor={fieldAlias}
                    className="focus"
                    sx={{
                      position: 'absolute',
                      left: 0,
                      color: (theme) => theme.palette.common.white,
                      fontSize: (theme) => theme.typography.body1.fontSize,
                      '&.focus': {
                        opacity: 0.8,
                        fontSize: (theme) => theme.typography.body2.fontSize,
                      },
                    }}
                  >
                    {Array.from(label).map((letter, index) => (
                      <Box
                        key={index}
                        component="span"
                        className="focus"
                        sx={{
                          position: 'relative',
                          top: 0,
                          '&.focus': {
                            top: '-32px',
                          },
                          transition: 'top 0.25s ease-out',
                          transitionDelay: `${0.022 * index}s`,
                        }}
                      >
                        {letter}
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })}

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 6, maxWidth: 284 }}>
              LOGIN
            </Button>

            <Box sx={{ mt: 6, zIndex: 1 }}>
              <Typography variant="body1" color="white">
                Don&apos;t have an account? <Link href="#">Register</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Day8;
