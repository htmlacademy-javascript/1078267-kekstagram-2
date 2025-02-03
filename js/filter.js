// import { openBigPicture, InitBigPictureListener } from './big-photos.js';
import { pictures, renderPreview } from './thumbnails.js';
import { debounce } from './utils.js';
import { FILTER, SORT_FUNC, MAX_PICTURE_COUNT } from './constants.js';


let currentFilter = 'filter-default';
let photos = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const debounceRender = debounce(renderPreview);

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON_CLASS}`);
  if (!targetButton.matches('button')) {
    return;
  }

  if (activeButton === targetButton) {
    return;
  }

  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

function clearBigPhoto() {
  pictures.querySelectorAll('a.picture').forEach((item) => item.remove());
}

function applyFilter() {
  let filteredPictures = [];

  if (currentFilter === FILTER.default) {
    filteredPictures = photos;
  }
  if (currentFilter === FILTER.random) {
    filteredPictures = photos.toSorted(SORT_FUNC.random).slice(0, MAX_PICTURE_COUNT);
  }
  if (currentFilter === FILTER.discussed) {
    filteredPictures = photos.toSorted(SORT_FUNC.discussed);
  }
  debounceRender(filteredPictures);
  clearBigPhoto();
}

function configFilter(picturesData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  photos = picturesData;
}

export {configFilter};
