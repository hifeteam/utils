import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.tsx$/), module);
