const REMOVE_MESSAGE_TIMEOUT = 5000;

const errorLoadDataTemplate = document.querySelector('#data-error').content;
const body = document.body;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onNotificationButtonClick = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = existElement.querySelector('button');
  if (evt.target === existElement || evt.target === closeButton) {
    existElement.remove();
    body.removeEventListener('click', onNotificationButtonClick);
  }
};


const onNotificationEscapeKeydown = (evt) => {
  evt.stopPropagation();
  const existElement = document.querySelector('.success') || document.querySelector('.error');
  if (evt.target === existElement || isEscapeKey(evt)) {
    existElement.remove();
    body.removeEventListener('keydown', onNotificationEscapeKeydown);
  }
};

const appendNotofication = (template, trigger = null) => {
  trigger?.();
  const notificationNode = template.cloneNode(true);
  body.append(notificationNode);
  body.addEventListener('click', onNotificationButtonClick);
  body.addEventListener('keydown', onNotificationEscapeKeydown);
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

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  createIdGenerator,
  isEscapeKey,
  Range,
  showErrorMessage,
  appendNotofication,
  debounce,
};


