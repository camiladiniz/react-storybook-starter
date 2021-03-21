import React from 'react';
import { addDecorator } from '@storybook/react';
import Center from '../src/components/Center/Center';
import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// alinha todas as stories ao centro
addDecorator(story => <Center>{story()}</Center>)