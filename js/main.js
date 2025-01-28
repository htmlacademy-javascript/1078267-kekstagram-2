import { openBigPicture } from './big-photos.js';
import { initUploadModal } from './photo-upload-form.js';
// import {renderPreview} from './thumbnails.js';
import {getData} from './api.js';
import {showErrorMessage, savePhotos} from './utils.js';

const bootstrap = async () => {
  try {
    const photos = await getData();
    // savePhotos(photos);
    // renderPreview(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

initUploadModal();
bootstrap();
