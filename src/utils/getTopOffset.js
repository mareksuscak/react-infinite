module.exports = function getTopOffset(elem) {
  if (!elem || !document) {
    throw new Error('Unable to calculate element\'s top offset');
  }

  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var top = box.top + scrollTop - clientTop;

  return Math.round(top);
};
