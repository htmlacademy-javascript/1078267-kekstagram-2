const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeNotification = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton || isEscapeKey(evt)) {
    existElement.remove();
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

const appendNotofication = (template, trigger = null) => {
  trigger?.();
  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);
  body.addEventListener('click', closeNotification);
  body.addEventListener('keydown', closeNotification);
};

const showErrorMessage = (message) => {
  const errorArea = errorLoadDataTemplate.cloneNode(true);
  if (message) {
    errorArea.querySelector('.data-error__title').textContent = message;
  }
  body.append(errorArea);

  const errorLoadDataArea = body.querySelector('.data-error');

  setTimeout(() => {
    errorLoadDataArea.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

function showToastError (errorMessage) {
  const errorElement = errorLoadDataTemplate.cloneNode(true);
  if(errorMessage) {
    errorElement.querySelector('.data-error__title').textContent = errorMessage;
  }
  document.body.appendChild(errorElement);
  setTimeout(() => (errorElement.remove()), REMOVE_MESSAGE_TIMEOUT);
}

function showFetchError() {
  showToastError();
}

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

function Range(min = 0, max = 100, step = 1, value) {
  this._min = min;
  this._max = max;
  this._step = step;
  this.value = value || max;
}

Range.prototype.increase = function() {
  this.value = Math.min(this.value + this._step, this._max);
};

Range.prototype.decrease = function() {
  this.value = Math.max(this.value - this._step, this._min);
};

let photos = [];
const savePhotos = (newPhotos) => {
  photos = newPhotos;
};

const getPhotoById = (id) => photos.find((photo) => photo.id === id);

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  createIdGenerator,
  isEscapeKey,
  Range,
  showErrorMessage,
  savePhotos,
  getPhotoById,
  appendNotofication,
  debounce,
  showFetchError,
  showToastError
};


