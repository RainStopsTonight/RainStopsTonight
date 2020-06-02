await tasks.reduce((sequence, url, idx) => {
  return sequence.then(() => {
    // doAnalyze 是个异步函数
    return doAnalyze(url, idx);
  });
}, Promise.resolve())

// 使用reduce缓解异步请求压力
