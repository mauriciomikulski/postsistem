import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post 
};

const Template = () => (
  <Post
    content="Este é um novo post de teste no meu projeto de posts de mensagens."            
    date="04/05/2021"
  />
);

export const Default = Template.bind({});