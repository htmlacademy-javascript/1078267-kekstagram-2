const uploadForm = document.querySelector('.img-upload__form');
const scaleControlSmaller = uploadForm.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadForm.querySelector('.scale__control--bigger');
const scaleControl = uploadForm.querySelector('.scale__control--value');
const image = uploadForm.querySelector('img');
const SCALE_STEP = 0.25;

let scale = 1;

const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale -= SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};


const onBiggerClick = () => {
  if (scale < 1) {
    scale += SCALE_STEP;
    image.style.transform = `scale(${scale})`;
    scaleControl.value = `${scale * 100}%`;
  }
};

const initScaleControle = () => {
  scaleControlSmaller.addEventListener('click', onSmallerClick);
  scaleControlBigger.addEventListener('click', onBiggerClick);
};

export {initScaleControle};
