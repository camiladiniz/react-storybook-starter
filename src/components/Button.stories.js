// Button.stories.js

import React from 'react';

import { action } from '@storybook/addon-actions';

import Button  from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
}

const Template = args => <Button {...args}></Button>

export const ButtonPrimary = Template.bind({});

export const Primary = () => <Button primary onClick={action('clicked')}>Button</Button>;
Primary.storyName = 'I am the primary';


export const Disabled = () => <Button primary onClick={action('clicked')} disabled={true}>Button</Button>;
Disabled.args = {
    disabled:true
}

export const Emoji = () => (
    <Button primary onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😄👍😍💯
        </span>
    </Button>
)

