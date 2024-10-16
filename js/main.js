//Создаем массив сообщений в комментарии
const MESSAGES = [
  'Всё отлично!',
  ' В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//создаем массив имен в комментарии
const NAMES = [
  'Дарья',
  'Петя',
  'Дмитрий',
  'Никита',
  'Ярослав',
  'Светлана',
  'Маша',
  'Витя',
  'Коля',
  'Анастасия',
  'Руслан',
  'Кирилл',
  'Наталья',
  'Катя',
  'Денис',
  'Аня',
  'Владимир',
  'Аристарх',
  'Данила',
  'Женя',
  'Юлия',
  'Артём',
  'Кристина',
  'София',
  'Лена',
];

// Создаем массив id комметнария
const COMMENTS_ID_MIN = 1;
const COMMENTS_ID_MAX = 750;
const COMMENTS_ID_ARREY = Array.from(
  { length: COMMENTS_ID_MAX },
  (_, i) => i + 1
);

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

// Создаем функцию получения любого случайного числа от мин и макс значений
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Создаем объект комментарий
const createComments = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const randomAvatarInteger = getRandomInteger(AVATAR_MIN, AVATAR_MAX);
  // создаем уникальный id комментария без повторений
  const commentsIdInteger = getRandomInteger(
    COMMENTS_ID_MIN,
    COMMENTS_ID_ARREY.length - 1
  );

  return {
    commentsId: commentsIdInteger,
    commentsAvatar: 'img/avatar-' + randomAvatarInteger + '.svg',
    commentsMessage: MESSAGES[randomMessageIndex],
    commentsName: NAMES[randomNameIndex],
  };
};

// создаем уникальный id фото по порядку от 1 до 25

// Создаем объект фотографию
const createPhoto = () => ({
  photoId: '',
  photoUrl: 'photos/ .jpg',
  photoDescription: 'Мое фото',
  photoLikes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  photoComments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComments),
});

//Создаем массив фотографий
const photoArray = Array.from({ length: MAX_PHOTO }, createPhoto);

console.log(photoArray);
