import { openBigPicture } from './big-photos.js';
import { initUploadModal } from './photo-upload-form.js';
// import {renderPreview} from './thumbnails.js';
import {getData} from './api.js';
import {showErrorMessage} from './utils.js';

const bootstrap = async () => {
  try {
    const photoes = await getData();
    // renderPreview(photoes);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

initUploadModal();
bootstrap();
