import {findTemplate} from './utils.js';

const template = findTemplate('picture');
const container = document.querySelector('.pictures');

const ctrateThumbnail = (photo) => {
  /** @type {HTMLElement}*/
  const thumbnail = template.cloneNode(true);
  const {id, url, likes, comments, description} = photo;
  thumbnail.href = url;
  thumbnail.dataset.id = id;

  const image = thumbnail.querySelector('.picture__img');
  image.src = url;
  image.alt = description;

  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  return thumbnail;
};

const renderThumbnail = (photos) => container.append(...photos.map(ctrateThumbnail));

export {renderThumbnail};
