import * as React from 'react';
import scroll from '../';
import './style.scss';

const { useEffect, useState } = React;

export const Demo = () => {
  const [dom, setDom] = useState<any>(null);

  useEffect(() => {
    setDom(document.querySelector('.scroll-box'));
  }, []);

  const handleDisableScroll = () => {
    scroll.disableScroll(dom);
  };

  const handleEnableScroll = () => {
    scroll.enableScroll(dom);
  };

  return (
    <div className='scroll-box'>
      <div className='scroll-box-content'>
        <div>
          <button onClick={handleDisableScroll}>禁止 document.body 滚动</button>
        </div>
        <div>
          <button onClick={handleEnableScroll}>使 document.body 能滚动</button>
        </div>
        <span className='float-right'>观察此元素的位置</span>
      </div>
    </div>
  );
};

export default { title: 'scroll' };
