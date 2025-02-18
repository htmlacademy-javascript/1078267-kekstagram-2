import { Range } from './utils.js';

const uploadForm = document.querySelector('.img-upload__form');
const imageUploadPreviewContainer = uploadForm.querySelector('img');
const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControl = uploadForm.querySelector('.scale__control--value');

let scale = new Range(25, 100, 25, 100);

const updateScale = () => {
  scaleControl.value = `${scale.value}%`;
  const scaleParam = parseFloat(scale.value / 100).toFixed(2);
  imageUploadPreviewContainer.style.transform = `scale(${scaleParam})`;
};

const resetScale = () => {
  scale = new Range(25, 100, 25, 100);
  updateScale();
};

const onScaleIncreaseClick = () => {
  scale.increase();
  updateScale();
};

const onScaleDecreaseClick = () => {
  scale.decrease();
  updateScale();
};

const initScaleControle = () => {
  scaleControlBigger.addEventListener('click', onScaleIncreaseClick);
  scaleControlSmaller.addEventListener('click', onScaleDecreaseClick);
  updateScale();
};


export {initScaleControle, resetScale, updateScale};
