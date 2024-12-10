import { MOCKED_PHOTOS } from './examples.js';
import { clearComments, renderComments } from './render-comments.js';
import { pictures} from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCaption = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const onBigPictureCancelClick = () => {
  closeBigPicture();
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

function closeBigPicture() {
  clearComments();

  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeydown);
}

const openBigPicture = (pictureId) => {
  const currentPhoto = MOCKED_PHOTOS.find(
    (photo) => photo.id === Number(pictureId)
  );

  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentsCaption.textContent = currentPhoto.description;

  renderComments(currentPhoto.comments);

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onEscKeydown);
};

const InitBigPictureLIstener = (photoPreview) => {
  photoPreview.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      openBigPicture(currentPicture.dataset.pictureId);
    }
  });
};

InitBigPictureLIstener(pictures);

export { openBigPicture};
