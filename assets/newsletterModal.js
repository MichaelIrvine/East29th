if ('localStorage' in window && window['localStorage'] !== null) {
  let visits = localStorage.getItem('visits');
  if (visits == null) {
    visits = 1;
  }

  if (visits == 1) {
    const modal = document.querySelector('.modal--wrapper');
    const body = document.querySelector('body');
    const closeBtn = document.getElementById('close-modal');
    const modalMask = document.querySelector('.modal-mask');
    const form = document.getElementById('modal_contact_form');
    let previousActiveEl;

    setTimeout(() => {
      // Keep record of previous active element
      // in order to return focus to the element
      previousActiveEl = document.activeElement;
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('modal-active');
      body.classList.add('modal-open');
      // Shift focus into modal
      closeBtn.focus();
    }, 5000);

    function closeModal() {
      modal.classList.remove('modal-active');
      body.classList.remove('modal-open');
      modal.setAttribute('aria-hidden', 'true');
      localStorage.setItem('visits', visits + 1);
      previousActiveEl.focus();
    }

    function onFormSubmit() {
      localStorage.setItem('visits', visits + 1);
      modal.classList.remove('modal-active');
      body.classList.remove('modal-open');
      modal.setAttribute('aria-hidden', 'true');
    }

    // Form Submit - set visits to +1
    form.addEventListener('submit', onFormSubmit);
    // Close The Pop up
    closeBtn.addEventListener('click', closeModal);
    modalMask.addEventListener('click', closeModal);

    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  } else {
    localStorage.setItem('visits', visits + 1);
  }
}
