import * as React from 'react';
import getScrollBarSize from '../';

const { useState } = React;

export const Demo = () => {
  const [width, setWidth] = useState(0);

  const getWidth = () => {
    const width = getScrollBarSize;
    setWidth(width);
  };

  return (
    <div>
      <button onClick={getWidth}>点击获取 scroll bar 宽度</button>
      <div>滚动条宽度：{width} px</div>
    </div>
  );
};

export default { title: 'getScrollBarSize' };
