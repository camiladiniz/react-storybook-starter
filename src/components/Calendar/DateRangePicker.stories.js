import React from 'react';
import { Provider } from 'react-redux';

import DatePicker from './DateRangePicker';

import { action } from '@storybook/addon-actions';
export default {
    title: 'Components/Date',
    component: DatePicker,
  }

const Template = args => <DatePicker {...args} />;

export const RangePicker = Template.bind({});
