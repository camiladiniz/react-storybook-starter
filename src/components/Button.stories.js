// Button.stories.js

import React from 'react';
import { action } from '@storybook/addon-actions';

import Button  from './Button';

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button primary onClick={action('clicked')}>Button</Button>;
Primary.storyName = 'I am the primary';

const Template = args => <Button {...args} />;

export const Emoji = () => (
    <Button primary onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
            😄👍😍💯
        </span>
    </Button>
)

