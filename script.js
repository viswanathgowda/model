'use strict';

const model = document.querySelectorAll('.show-modal');
const dialog = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-modal');

const open = function () {
  dialog.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const close = function () {
  dialog.classList.add('hidden');
  overlay.classList.add('hidden');
};
model.forEach(btn => {
  btn.addEventListener('click', () => {
    open();
  });
});

closebtn.addEventListener('click', () => {
  close();
});

overlay.addEventListener('click', () => {
  close();
});
