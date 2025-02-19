
import { renderPreview } from './thumbnails.js';
import { debounce } from './utils.js';
import { FILTER, SortFunc, MAX_PICTURE_COUNT } from './constants.js';


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

function applyFilter() {
  let filteredPictures = [];

  if (currentFilter === FILTER.default) {
    filteredPictures = photos;
  }
  if (currentFilter === FILTER.random) {
    filteredPictures = photos.toSorted(SortFunc.RANDOM).slice(0, MAX_PICTURE_COUNT);
  }
  if (currentFilter === FILTER.discussed) {
    filteredPictures = photos.toSorted(SortFunc.DISCUSSED);
  }
  debounceRender(filteredPictures);
}

function configFilter(picturesData) {
  filterElement.classList.remove('img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  photos = picturesData;
}

export {configFilter};
