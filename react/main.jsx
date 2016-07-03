import React from 'react';
import { render } from 'react-dom';
import MotionDemo from './MotionDemo';
import StaggeredMotionDemo from './StaggeredMotionDemo';
import TransitionMotionDemo from './TransitionMotionDemo';

render(
  <div><TransitionMotionDemo /></div>,
  document.getElementById('app')
);
