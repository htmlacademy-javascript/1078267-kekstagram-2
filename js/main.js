import { pictures} from './thumbnails.js';
import { openBigPicture} from './big-photos.js';

pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    openBigPicture(currentPicture.dataset.pictureId);
  }
});
