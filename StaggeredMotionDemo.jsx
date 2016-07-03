import React from 'react';
import { StaggeredMotion, spring } from 'react-motion';

function StaggeredMotionDemo() {
  return (
    // Motionと違ってpropsの名前がdefaultStyles, stylesと複数形なことに注意すること！
    <StaggeredMotion defaultStyles={[{ x: 0 }, { x: 0 }, { x: 0 }]} styles={
      prevInterpolatedStyles => prevInterpolatedStyles.map((style, i) => {
        if (i === 0) {
          // 一番最初の要素は最初から終端値600まで動かす
          return { x: spring(600, { stiffness: 10, damping: 17 }) };
        } else {
          // 一番目以降の要素は、一つ前の要素のxの値が400まで行ったのを確認した時点で終端値600まで動きだす
          if (prevInterpolatedStyles[i - 1].x > 400) {
            return { x: spring(600, { stiffness: 10, damping: 17 }) };
          } else {
            // 一つ前の要素のxの値が400にいくまでは動かさない
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

export default StaggeredMotionDemo;
