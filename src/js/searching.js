import refs from './refs.js';
import debounce from 'lodash.debounce';
import { getImg } from './apiService.js';

let numberOfPage;

refs.searchingForm.addEventListener(
  'input',

  debounce(async () => {
    numberOfPage = 1;

    if (refs.gallery.innerHTML !== '') {
      refs.gallery.innerHTML = '';
    }

    if (refs.searchingForm.value === '') {
      refs.gallery.innerHTML = '';
      refs.btn.classList.add('invisible');
      return;
    }

    await getImg(refs.searchingForm.value, numberOfPage);

    if (refs.gallery.innerHTML === '') {
      refs.btn.classList.add('invisible')
    } else {
      refs.btn.classList.remove('invisible');
    }
  }, 500),
);

refs.btn.addEventListener('click', () => {
  numberOfPage =+ 1;
  getImg(refs.searchingForm.value, numberOfPage);
  setTimeout(
    () =>
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      }),
    500,
  );
});
