/**
 * 吸顶
 * @param {HTMLElement} elem
 */
 
function stickyTop(elem, beyondDom) {
  beyondDom = beyondDom || true;
  if (typeof elem !== "object") return false;
  var scrollTop =
    window.pagYoffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var realTop = elem.offsetTop; // 元素距离offsetParent顶部距离
  var parent = elem.offsetParent;
  while (parent !== null) {
    realTop += parent.offsetTop;
    parent = parent.offsetParent;
  }

  var util = SFF.common.util,
    hasClass = util.hasClass,
    addClass = util.addClass,
    removeClass = util.removeClass;

  function addHandler(t, e, n) {
    t.addEventListener
      ? t.addEventListener(e, n, !1)
      : t.attachEvent
        ? t.attachEvent("on" + e, n)
        : (t["on" + e] = n);
  }

  function sticky() {
    var top = realTop,
      i = elem.getAttribute("data-fixClass") || "scroll-fix";
    hasClass(elem, i) || (top = realTop);
    var o =
      elem.clientHeight ||
      (elem.getBoundingClientRect() && elem.getBoundingClientRect().height),
      s = scrollTop;

    s > top
      ? beyondDom && s > top + o - 40
        ? removeClass(elem, i)
        : addClass(elem, i)
      : removeClass(elem, i);
  }

  addHandler(window, "scroll", sticky);
}
