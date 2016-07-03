import React from 'react';
import { Motion, spring } from 'react-motion';

function MotionDemo() {
  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(600, { stiffness: 10, damping: 4 }) }}>
      {interpolatingStyle =>
        <div
          style={{
            fontSize: '40px',
            WebkitTransform: `translate3d(${interpolatingStyle.x}px, 0, 0)`,
          }}
        >
          移動距離 {interpolatingStyle.x} px
        </div>
      }
    </Motion>
  );
}

export default MotionDemo;
