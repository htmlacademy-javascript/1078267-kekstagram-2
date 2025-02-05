import { isEscapeKey, appendNotofication } from './utils.js';
import { validateHashtagField, isCommentValid } from './hashtag-comment-validation.js';
import { initScaleControle, resetScale } from './scale-controle.js';
import { initEffects, resetEffects } from './effect-slider-editor.js';
import {sendData} from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadFile = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetButton = uploadForm.querySelector('#upload-cancel');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const uploadFormSubmitButton = uploadForm.querySelector('.img-upload__submit');

const templateSuccess = document.querySelector('#success').content;
const templateError = document.querySelector('#error').content;

const UploadFormSubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const disableButton = (text) => {
  uploadFormSubmitButton.disabled = true;
  uploadFormSubmitButton.textContent = text;
};

const enableButton = (text) => {
  uploadFormSubmitButton.disabled = false;
  uploadFormSubmitButton.textContent = text;
};

const onImageUploaderCancelClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput){
      evt.stopPropagation();
    } else {
      closePhotoEditor();
    }
  }
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  ErrorTextParent: 'img-upload__field-wrapper',
  ErrorTextClass: 'img-upload__field-wrapper--error'
});

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetButton.removeEventListener('click', onImageUploaderCancelClick);
  uploadFile.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
  resetScale();
  resetEffects();
  pristine.reset();
}

const initUploadModal = () => {
  uploadFile.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    photoEditorResetButton.addEventListener('click', onImageUploaderCancelClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

pristine.addValidator(hashtagInput, validateHashtagField, 'хэштеги указаны некорректно');

pristine.addValidator(commentInput, isCommentValid, 'комментарий не может сожержать больше 140 символов');

const sendFormData = async (formElement) => {
  const isValid = pristine.validate();
  if(isValid) {
    disableButton(UploadFormSubmitButtonText.SENDING);
    try {
      await sendData(new FormData (formElement));
      appendNotofication(templateSuccess, () => closePhotoEditor(uploadForm));
    } catch (error) {
      appendNotofication(templateError);
    } finally {
      enableButton(UploadFormSubmitButtonText.IDLE);
    }

  }
};

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  sendFormData(evt.target);
};

uploadForm.addEventListener('submit', formSubmitHandler);

initScaleControle();
initEffects();

export { initUploadModal};
