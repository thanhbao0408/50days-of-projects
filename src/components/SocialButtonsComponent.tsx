/* eslint-disable react/prop-types */
import React from 'react';
import { SxProps } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSkype } from '@fortawesome/free-brands-svg-icons/faSkype';
import SvgIcon from '@mui/material/SvgIcon';

const footerHeight = 150;

type FontAwesomeSvgIconProps = {
  icon: any;
};

interface SocialButtonsComponentProps {
  sx?: SxProps;
}

// eslint-disable-next-line react/display-name
const FontAwesomeSvgIcon = React.forwardRef<SVGSVGElement, FontAwesomeSvgIconProps>((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === 'string' ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        // eslint-disable-next-line react/jsx-key
        svgPathData.map((d: string, i: number) => <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />)
      )}
    </SvgIcon>
  );
});

const SocialButtonsComponent: React.FC<SocialButtonsComponentProps> = (props) => {
  const { sx } = props;

  // github, linked, skype

  return (
    <Stack
      spacing={1}
      sx={{
        height: footerHeight,
        ...sx,
        '& .MuiIconButton-root': {
          mt: 0,
        },
      }}
    >
      <IconButton
        aria-label="github"
        component="a"
        href="https://github.com/thanhbao0408"
        target="_blank"
        title="Check out my work on Github"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="linked-in"
        component="a"
        href="https://www.linkedin.com/in/bao-nguyen-145a8011a/"
        target="_blank"
        title="Connect on Linkedin"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        aria-label="skype"
        component="a"
        href="https://join.skype.com/invite/YhHxEP0iXooM"
        target="_blank"
        title="Let's chat on Skype"
      >
        <FontAwesomeSvgIcon icon={faSkype} />
      </IconButton>
    </Stack>
  );
};

export default SocialButtonsComponent;
