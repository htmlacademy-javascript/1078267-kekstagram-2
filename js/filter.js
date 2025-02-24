
import { renderPreview } from './thumbnails.js';
import { debounce } from './utils.js';
import { Filter, SortFunc, MAX_PICTURE_COUNT } from './constants.js';

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
let currentFilter = 'filter-default';
let photos = [];
const filterElement = document.querySelector('.img-filters');

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

function applyFilter() {
  let filteredPictures = [];

  if (currentFilter === Filter.DEFAULT) {
    filteredPictures = photos;
  }
  if (currentFilter === Filter.RANDOM) {
    filteredPictures = photos.toSorted(SortFunc.GET_RANDOM_PREVIEW).slice(0, MAX_PICTURE_COUNT);
  }
  if (currentFilter === Filter.DISCUSSED) {
    filteredPictures = photos.toSorted(SortFunc.GET_DISCUSSED_PREVIEW);
  }
  debounceRender(filteredPictures);
}

function configFilter(picturesData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  photos = picturesData;
}

export {configFilter};
