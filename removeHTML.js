const removeHTML = (str = '') => str.replace(/<[\/\!]*[^<>]*>/ig, '')
console.log(removeHTML('<h1>哈哈哈哈<呵呵呵</h1>')) // 哈哈哈哈<呵呵呵

