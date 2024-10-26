import {getRandomInteger, createRandomIdFromRangeGenerator, createIdGenerator} from './util.js';
import {MESSAGES, NAMES} from './data.js';

// Создаем массив id комметнария
const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = 750;

//Создаем переменные мин и макс значений фото аватара
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

// Создаем переменные мин и макс значений likes
const MIN_LIKES = 15;
const MAX_LIKES = 200;

// Создаем переменные мин и макс значений комментариев под фото
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

// Создаем переменную макс значения кол-ва фотографий
const MAX_PHOTO = 25;


const generateCommentId = createRandomIdFromRangeGenerator(
  COMMENTS_ID_MIN,
  COMMENTS_ID_MAX
);

//создаем функцию получения случайного значения из массива
const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

// Создаем объект комментарий
const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// создаем уникальный id фото по порядку от 1 до 25
const generatePhotoId = createIdGenerator();

// создаем уникальный порядковый номер url фото по порядку от 1 до 25
const generateUrlId = createIdGenerator();

// создаем уникальный орядковый номер description фото по порядку от 1 до 25
const generateDescriptionId = createIdGenerator();

// Создаем объект фотографию
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

//Создаем массив фотографий
const photoArray = Array.from({ length: MAX_PHOTO }, createPhoto);

export {photoArray};
