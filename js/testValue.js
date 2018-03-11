function testValue(id, value, porperty) {
  let dummy = document.createElement('p');
  dummy.style[porperty] = value;

  if (dummy.style[porperty]) {
    dummy.classList.add(id)
    return true;
  }

  dummy.classList.add('no-' + id)
  return false;
}
