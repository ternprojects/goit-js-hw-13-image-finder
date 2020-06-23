//api - 17160527-492d6141da7b27d6d4ad50825
//const baseURL = 'https://pixabay.com/api/';

import axios from 'axios';
import galleryMarkup from '../templates/pictures-items.hbs';
import refs from './refs.js';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const apiKey = '17160527-492d6141da7b27d6d4ad50825';
const searchSettings = '?image_type=photo&orientation=horizontal';
const imgValues = 12;

async function getImg(searchQuery, numberOfPage) {
  return axios
    .get(
      `/${searchSettings}&q=${searchQuery}&page=${numberOfPage}&per_page=${imgValues}&key=${apiKey}`,
    )
    .then(({ data }) => {
      const markup = galleryMarkup(data.hits);
      refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(err => {
      console.error(err);
    });
}

export { getImg };
