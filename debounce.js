export const debounce = function (fn, delay = 400) {
  let timer:any = null; //借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay); // 简化写法
  };
};
