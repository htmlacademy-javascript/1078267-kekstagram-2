import {getRandomInteger, createRandomIdFromRangeGenerator, createIdGenerator} from './utils.js';
import {MESSAGES, NAMES} from './constants.js';

const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = 750;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MAX_PHOTO = 25;

const generateCommentId = createRandomIdFromRangeGenerator(
  COMMENTS_ID_MIN,
  COMMENTS_ID_MAX
);

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const generatePhotoId = createIdGenerator();
const generateUrlId = createIdGenerator();
const generateDescriptionId = createIdGenerator();

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: `Мое фото ${generateDescriptionId()}`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    { length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) },
    createComments
  ),
});

const photoArray = Array.from({ length: MAX_PHOTO }, createPhoto);

export {photoArray};
