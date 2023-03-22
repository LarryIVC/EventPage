const modalOpen = document.querySelector('.fa-bars');
const modalContainer = document.getElementById('container-menu-modal');
const modalClose = document.getElementById('btn-close');

function openModal() {
  modalContainer.classList.add('turn_on');
}

function closeModal() {
  modalContainer.classList.remove('turn_on');
}

const navigationLinks = document.querySelectorAll('.modal-item');

navigationLinks.forEach((link) => {
  link.addEventListener('click', closeModal);
});

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);