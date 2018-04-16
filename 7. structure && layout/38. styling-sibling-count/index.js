const colors = [
  '#D6E055', // Agave
  '#082323', '#E6E2AF', '#A7A37E', '#EFECCA', '#046380', // Sandy stone beach
  '#1C171D', '#FEE169', '#CDD452', '#F9722E', '#C9313D', // Sushi Maki
  '#2E95A3', '#50B8B4', '#C6FFFA', '#E2FFA8', // Agave
];
const palette = document.querySelector('.palette');

function addColor(template) {
  const li = template.cloneNode(true);
  const color = colors.pop();
  colors.unshift(color);
  li.style.background = color;
  palette.insertBefore(li, template.nextSibling);
}

palette.onclick = (evt) => {
  const button = evt.target;

  if (button.className === 'add') {
    addColor(button.parentNode.parentNode);
  } else if (button.className === 'delete') {
    const li = button.parentNode.parentNode;
    li.parentNode.removeChild(li);
  }
};
