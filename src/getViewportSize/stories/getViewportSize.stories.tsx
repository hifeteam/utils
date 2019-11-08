import * as React from 'react';
import getViewportSize from '../';

const { useState } = React;

export const Demo = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const getSize = () => {
    const { width, height } = getViewportSize();
    setWidth(width);
    setHeight(height);
  };

  return (
    <div>
      <button onClick={getSize}>点击获取 viewport 尺寸</button>
      <span>宽：{width}</span>
      <span>高：{height}</span>
    </div>
  );
};

export default { title: 'getViewportSize' };
