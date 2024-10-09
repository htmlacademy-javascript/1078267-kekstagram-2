

// Переменные объекта фотографии
const minPhoto = 1;
const maxPhoto = 25;

// Генерируем массив фото id

// Генерируем массив фото url

// Генерируем массив фото description

// Генерируем массив фото likes
const minLikes = 15;
const maxLikes = 200;

// Генерируем массив объектов фото comments

const MESSAGES = [
  'Всё отлично!',
  ' В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// Генерируем объект comments
// Генерируем массив comments id
// Генерируем массив comments avatar

const createComments = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  const randomMessageIndex = getRandomInteger(0, MESSAGES.length - 1);
  const randomAvatarInteger = getRandomInteger(1, 6);

  return {
    commentsId: '',
    commentsAvatar: 'img/avatar-' + randomAvatarInteger + '.svg',
    commentsMessage: MESSAGES[randomMessageIndex],
    commentsName: NAMES[randomNameIndex]
  };
};


// Создаем объект фотографию
const createPhoto = () => {
  return {
    photoId: '',
    photoUrl: '',
    photoDescription: '',
    photoLikes: '',
    photoComments: '',
  };
};


//создаем массив из 25 сгенерированных объектов - фотографий
