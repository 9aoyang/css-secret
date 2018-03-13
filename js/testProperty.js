/* eslint-disable */
function testProperty(property) {
/* eslint-enable */
  const root = document.documentElement;

  if (property in root.style) {
    root.classList.add(property);
    return true;
  }

  root.classList.add(`no-${property}`);
  return false;
}
