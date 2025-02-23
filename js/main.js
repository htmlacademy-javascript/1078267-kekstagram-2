import { initBigPictureListener } from './big-photos.js';
import { initUploadModal } from './photo-upload-form.js';
import {renderPreview} from './thumbnails.js';
import {getData} from './api.js';
import {showErrorMessage, savePhotos} from './utils.js';
import {configFilter} from './filter.js';

const initApplication = async () => {
  try {
    const photos = await getData();
    savePhotos(photos);
    renderPreview(photos);
    initBigPictureListener(photos);
    configFilter(photos);
  } catch (error) {
    showErrorMessage(error.message);
  }
};

initUploadModal();
initApplication();
