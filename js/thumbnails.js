import { MOCKED_PHOTOS } from './examples.js';
import {findTemplate, createFragment} from './utils.js';

const template = findTemplate('picture');
const container = document.querySelector('.pictures');

const ctrateThumbnail = (photo) => {
  /** @type {HTMLElement}*/
  const thumbnail = template.cloneNode(true);
  thumbnail.href = photo.url;
  thumbnail.dataset.id = photo.id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;

  return thumbnail;
};


createFragment(MOCKED_PHOTOS, ctrateThumbnail, container);


