const photoPreview = document.querySelector('.img-upload__preview');
const imagePreview = photoPreview.querySelector('img');
const effectsRadioButtonList = document.querySelector('.effects__list');
const effectLevelInput = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const effectSlider = document.querySelector('.effect-level__slider');
const sliderConfiguration = {
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  start: 1,
  connect: 'lower',
};

const getEffectPreviewClass = (value) => `effects__preview--${value}`;
const effectNames = ['chrome', 'sepia', 'marvin', 'phobos', 'heat'];
const classNames = effectNames.map(getEffectPreviewClass);

const defaulEffect = new Effect('none');
defaulEffect.apply = () => {
  sliderContainer.hidden = true;
  imagePreview.style = '';
  imagePreview.classList.remove(...classNames);
};

defaulEffect.updateLevel = () => {};

const effects = {
  none: defaulEffect,
  chrome: new Effect('chrome', 0, 1, 0.1, 'grayscale'),
  sepia: new Effect('sepia', 0, 1, 0.1, 'sepia'),
  marvin: new Effect('marvin', 0, 100, 1, 'invert', '%'),
  phobos: new Effect('phobos', 0, 3, 0.1, 'blur', 'px'),
  heat: new Effect('heat', 1, 3, 0.1, 'brightness'),
};

let currentEffect = defaulEffect;
const onEffectChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const effectName = evt.target.getAttribute('id').split('-')[1];
    currentEffect = effects[effectName];
    currentEffect.apply();
  }
};

function Effect(name, min, max, step, filter, filterUnit = '') {
  this.className = `effects__preview--${name}`;
  this.filter = filter;
  this.filterUnit = filterUnit;
  this.sliderOptions = {
    range: {
      min: min,
      max: max,
    },
    step: step,
    start: max,
  };
}

Effect.prototype.apply = function () {
  sliderContainer.hidden = false;
  imagePreview.style = '';
  imagePreview.classList.remove(...classNames);
  imagePreview.classList.add(this.className);
  effectSlider.noUiSlider.updateOptions(this.sliderOptions);
};

Effect.prototype.updateLevel = function (level) {
  imagePreview.style.filter = `${this.filter}(${level}${this.filterUnit})`;
};

const resetEffects = () => {
  currentEffect = defaulEffect;
  currentEffect.apply();
};

const initEffects = () => {
  currentEffect.apply();
  noUiSlider.create(effectSlider, sliderConfiguration);
  effectSlider.noUiSlider.on('update', () => {
    const currentEffectLevel = effectSlider.noUiSlider.get();
    effectLevelInput.value = currentEffectLevel;
    currentEffect.updateLevel(currentEffectLevel);
  });
  effectsRadioButtonList.addEventListener('click', onEffectChange);
};

export {initEffects, resetEffects };
