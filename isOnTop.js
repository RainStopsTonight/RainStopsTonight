var isVisible = function(elem) {
  var w = window, d = document, height, rects, on_top;
  if(!elem || (elem && elem.nodeType !== 1) || !elem.getClientRects || !d.elementFromPoint || !d.querySelector || !elem.contains) {
    return false;
  }
  if (elem.offsetWidth === 0 || elem.offsetHeight === 0) {
    return false;
  }
  height = w.innerHeight ? w.innerHeight: d.documentElement.clientHeight;
  rects = elem.getClientRects();
  on_top = function(r, elem) {
    var x = (r.left + r.right)/2,
      y = (r.top + r.bottom)/2,
      elemFromPoint = d.elementFromPoint(x, y);
      return (elemFromPoint === elem || elem.contains(elemFromPoint));
  };
  for (var i = 0, l = rects.length; i < l; i++) {
    var r = rects[i],
      in_viewport = r.top > 0 ? r.top <= height : (r.bottom > 0 && r.bottom <= height);
    if (in_viewport && on_top(r, elem)) {
      return true;
    }
  }
  return false;
};
