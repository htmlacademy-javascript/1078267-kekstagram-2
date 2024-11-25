import { MOCKED_PHOTOS} from './examples.js';
import { renderThumbnail} from './thumbnails.js';
import { openBigPicture} from './big-photos.js';
renderThumbnail(MOCKED_PHOTOS);

ctrateThumbnail(MOCKED_PHOTOS).addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');

  if (currentPicture) {
    openBigPicture(openBigPicture.dataset.pictureID);
  }
});
