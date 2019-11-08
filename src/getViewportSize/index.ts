export interface GetViewportSizeReturn {
  width: number;
  height: number;
}

/**
 * 获取 viewport 的尺寸
 */
const getViewportSize = (): GetViewportSizeReturn => {
  return {
    width: Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    ),
    height: Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
  };
};

export default getViewportSize;
