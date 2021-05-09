import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio 
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/1284323790692978689/TXV_s_Sd_400x400.jpg"
    name="Mauricio Mikulski"
    tagline="Helping others to learn by doing!"
    role="Student Developer @dwlove"
  />
);

export const Default = Template.bind({});