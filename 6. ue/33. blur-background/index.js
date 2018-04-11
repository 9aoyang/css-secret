const main = document.querySelector('main');
const dialog = document.querySelector('dialog');

main.addEventListener('click', () => {
  main.classList.toggle('de-emphasized');
  dialog.showModal();
});

dialog.addEventListener('click', () => {
  main.classList.toggle('de-emphasized');
  dialog.close();
});
