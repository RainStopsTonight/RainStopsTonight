/**
 * @description 判断元素是否全部在Document文档可见范围内
 * @param {Element} dom 
 */
function isElementInDocument(dom) {
    if (dom.tagName.toLowerCase() === 'br') return true
    var boundingClientRect = dom.getBoundingClientRect()
    var topDistance = boundingClientRect.y + window.scrollY > 0;
    var bottomDistance = boundingClientRect.bottom + window.scrollY < Math.max(document.body.offsetHeight, document.body.scrollHeight)
    var leftDistance = boundingClientRect.left + window.scrollX > 0
    var rightDistance = boundingClientRect.right + window.scrollX < Math.max(document.body.offsetWidth, document.body.scrollWidth)
    var res = topDistance && bottomDistance && leftDistance && rightDistance
    if (!res) {
        console.log(`%c topDistance:${topDistance},bottomDistance:${bottomDistance},leftDistance:${leftDistance},rightDistance:${rightDistance}`, 'color:red');
        console.log(dom);
        debugger
    }
    return res
}
