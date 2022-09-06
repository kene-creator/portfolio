const burgerIcon = document.querySelector('.burger-icon');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.btn-close-modal');
const modalList = document.querySelector('.modal-list');

const modalOpen = (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
};

const modalClose = () => {
  modal.classList.add('hidden');
};

burgerIcon.addEventListener('click', modalOpen);
btnCloseModal.addEventListener('click', modalClose);

modalList.addEventListener('click', (e) => {
  e.preventDefault();
  modalClose();

  if (e.target.classList.contains('modal-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
