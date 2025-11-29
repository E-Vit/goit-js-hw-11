import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === "") {
    iziToast.error({
      title: 'Error',
      message: 'Search field cannot be empty',
      position: 'topRight'
    });
    return;
  }

  // Тут ДАЛІ буде логіка запиту до API, створення галереї, loader
});