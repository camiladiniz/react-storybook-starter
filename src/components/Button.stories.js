// Button.stories.js

import React from 'react';

import { action } from '@storybook/addon-actions';

import Button  from './Button';

import Center from './Center/Center';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
//   decorators: [story => <Center style={{ padding: '3rem' }}>{story()}</Center>], -> remove a necessidade de adicionar a tag center em todas as stories
  argTypes : {
      variantColor: {control: 'text'},
      children: {control: 'text'},
    //   onClick: {action: 'clicked'} -> faz o mesmo que o inline  onClick={action('clicked')}
  }
}

const Template = args => <Button {...args}></Button>

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
    variantColor: 'green',
    children: 'Texto escrito através de args control'
}

export const Primary = () => <Center><Button primary onClick={action('clicked')}>Button</Button></Center>;
Primary.storyName = 'I am the primary';


export const Disabled = () => <Button primary onClick={action('clicked')} disabled={true}>Button</Button>;
Disabled.args = {
    ...Primary.args, // faz uma cópia dos dados
    disabled:true
}

export const Emoji = () => (
    <Button primary onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😄👍😍💯
        </span>
    </Button>
)

