import React, { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { indigo, lime } from '@mui/material/colors';

interface FaqProps {
  faqQuestion: string;
  faqAnswer: string;
}

const faqData: FaqProps[] = [
  {
    faqQuestion: "Why  shouldn't we trust atoms?",
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
  {
    faqQuestion: 'What do you call someone with no body and no nose?',
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
  {
    faqQuestion: "What's the object-oriented way to became wealthy?",
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
  {
    faqQuestion: 'WHow many tickels does it take to tickle an octopus?',
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
  {
    faqQuestion: 'What is: 1 + 1?',
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
  {
    faqQuestion: 'What is happiness?',
    faqAnswer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ducimus deleniti quo dolor est cupiditate nulla reiciendis illum atque quidem!',
  },
];

const Day13 = () => {
  const [expanded, setExpanded] = React.useState<number | false>(0);
  const handleChange = (panelIndex: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panelIndex : false);
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h3" sx={{ textAlign: 'center' }}>
        Day 13 - FAQ Collapse
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {faqData.map((data, index) => {
            return (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                disableGutters
                square
                sx={{
                  backgroundColor: expanded === index ? (theme) => theme.palette.common.white : 'transparent',
                  padding: '24px 16px',
                  borderRadius: 4,
                  '::before': {
                    display: 'none',
                  },
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary
                  expandIcon={expanded !== index ? <ExpandMoreIcon /> : <CancelIcon />}
                  aria-controls="panel1a-content"
                  sx={{ zIndex: 3 }}
                >
                  <Typography>{data.faqQuestion}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ zIndex: 2 }}>{data.faqAnswer}</Typography>

                  {expanded === index ? (
                    <Box component="span" sx={{ position: 'absolute', top: 10, left: -10, zIndex: 1, opacity: 0.5 }}>
                      <SmsOutlinedIcon sx={{ fontSize: 100, color: lime[300] }} />
                    </Box>
                  ) : (
                    <></>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Day13;
