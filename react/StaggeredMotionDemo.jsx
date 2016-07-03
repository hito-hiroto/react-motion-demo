import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

function MotionDemo() {
  return (
    <StaggeredMotion defaultStyles={[{ x: 0 }, { x: 0 }, { x: 0 }]} styles={
      prevInterpolatedStyles => prevInterpolatedStyles.map((style, i) => {
        if (i === 0) {
          return { x: spring(600, { stiffness: 10, damping: 17 }) };
        } else {
          if (prevInterpolatedStyles[i - 1].x > 400) {
            return { x: spring(600, { stiffness: 10, damping: 17 }) };
          } else {
            return { x: 0 };
          }
        }
      })
    }>
      {interpolatingStyles =>
        <div>
          {interpolatingStyles.map((style, _) =>
            <div
              style={{
                fontSize: '40px',
                WebkitTransform: `translate3d(${style.x}px, 0, 0)`,
              }}
            >
              移動距離 {style.x} px
            </div>
          )}
        </div>
      }
    </StaggeredMotion>
  );
}

export default MotionDemo;
