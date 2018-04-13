const slider2 = document.querySelector('.slider2');

// 创建附加的 div 元素，并用它包住第一个图片元素
const div = document.createElement('div');
const img = slider2.querySelector('img');
slider2.insertBefore(div, img);
div.appendChild(img);

// 创建滑块
const range = document.createElement('input');
range.type = 'range';
range.oninput = () => {
  div.style.width = `${range.value}%`;
};
slider2.appendChild(range);
