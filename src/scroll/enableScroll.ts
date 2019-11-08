/**
 * 使 dom 节点可以滚动
 * @param dom dom 节点
 */
const enableScroll = (dom: HTMLElement = document.body) => {
  dom.style.width = '';
  dom.style.overflow = '';
};

export default enableScroll;
