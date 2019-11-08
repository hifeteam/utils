import disableScroll from './disableScroll';
import enableScroll from './enableScroll';

export interface ScrollInterface {
  disableScroll: typeof disableScroll;
  enableScroll: typeof enableScroll;
}

const scroll: ScrollInterface = {
  disableScroll,
  enableScroll
};

export default scroll;
