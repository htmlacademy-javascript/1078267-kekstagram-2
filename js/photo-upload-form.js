import { isEscapeKey } from './utils.js';
import { validateHashtagField, isCommentValid } from './hashtag-comment-validation.js';
import { initScaleControle, resetScale } from './scale-controle.js';
import { initEffects, resetEffects } from './effect-slider-editor.js';

const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadFile = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetButton = uploadForm.querySelector('#upload-cancel');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const onImageUploaderCancelClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput){
      evt.stopPropagation();
    } else {
      uploadForm.requestFullscreen();
      closePhotoEditor();
    }
  }
};

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetButton.removeEventListener('click', onImageUploaderCancelClick);
  uploadFile.value = '';
}

const initUploadModal = () => {
  uploadFile.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    resetScale();
    resetEffects();
    photoEditorResetButton.addEventListener('click', onImageUploaderCancelClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});


pristine.addValidator(hashtagInput, validateHashtagField, 'хэштеги указаны некорректно');

pristine.addValidator(commentInput, isCommentValid, 'комментарий не может сожержать больше 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();

  if (pristine.validate()) {
    uploadForm.submit();
  }
});

initScaleControle();
initEffects();

export { initUploadModal};
