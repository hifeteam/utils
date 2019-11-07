const disableScroll = (dom: HTMLElement = document.body) => {
  const domStyle: CSSStyleDeclaration = getComputedStyle(dom);
  const overflowArr = domStyle.overflow.split(' ');
  const overflow = overflowArr[overflowArr.length - 1];

  const domWidthStr = domStyle.width;

  let domWidth: number = 0;
  domWidth;
  if (domWidthStr) {
    domWidth = domWidthStr
      ? parseInt(domWidthStr.substring(0, domWidthStr.length - 2), 10)
      : 0;
  }

  if (overflow !== 'hidden') {
    dom.style.overflow = 'hidden';
    dom.style.width = `${domWidth}px`;
  }
};

export default disableScroll;
