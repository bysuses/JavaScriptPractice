const buttonChildren = document.querySelector('#button-children');
const buttonGifts = document.querySelector('#button-gifts');

buttonChildren.addEventListener('click', () => {
  window.location = '/children';
});

buttonGifts.addEventListener('click', () => {
  window.location = '/gifts';
});
