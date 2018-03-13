/* eslint-disable */
function $$(selector, context) {
  context = context || document;
  /* eslint-enable */
  const elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
}
