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
const commentsIdMin = 1;
const commentsIdMax = 750;
const COMMENTSIDARREY = Array.from({ length: commentsIdMax }, (_, i) => i + 1);

//Создаем переменные мин и макс значений фото аватара
const avatarMin = 1;
const avatarMax = 6;

// Создаем переменные мин и макс значений likes
const minLikes = 15;
const maxLikes = 200;

// Создаем переменные мин и макс значений комментариев под фото
const minComments = 0;
const maxComents = 30;

// Создаем переменную макс значения кол-ва фотографий
const maxPhoto = 25;

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
  const randomAvatarInteger = getRandomInteger(avatarMin, avatarMax);
  const commentsIdInteger = getRandomInteger(commentsIdMin, COMMENTSIDARREY.length - 1)

  return {
    commentsId: commentsIdInteger,
    commentsAvatar: 'img/avatar-' + randomAvatarInteger + '.svg',
    commentsMessage: MESSAGES[randomMessageIndex],
    commentsName: NAMES[randomNameIndex],
  };
};

// Создаем объект фотографию
const createPhoto = () => {
  let photoId = 1;

  return () => {
    const photo = {};
    const commentsQuantity = getRandomInteger(minComments, maxComents);
    const likesQuantity = getRandomInteger(minLikes, maxLikes);

    photo.id = photoId;
    photo.url = 'photos/' + photoId + '.jpg';
    photo.description = 'Мое фото ' + photoId;
    photo.likes = likesQuantity;
    photo.comments = Array.from({ length: commentsQuantity }, createComments);
    photoId++;
    return photo;
  };
};

//Создаем массив фотографий
const photoArray = Array.from({ length: maxPhoto }, createPhoto());

console.log(photoArray);
