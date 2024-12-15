const MAX_HASHTAG_SYMBOLS = 20;
const MAX_HASHTAGS = 20;
const MAX_COMMENT_LENGTH = 140;

let errorMessage = '';
const error = () => errorMessage;

const isCommentValid = (value) => {
  errorMessage = '';

  const comment = value;
  const rules = [
    {
      check: comment.length >= MAX_COMMENT_LENGTH,
      error: `длина комментария не может составлять больше ${MAX_COMMENT_LENGTH}символов`,
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};


const isHashtagValid = (value) => {
  errorMessage = '';


  const hashtags = value.split(' ');
  const rules = [
    {
      check: hashtags.some((item) => item === '#'),
      error: 'хеш-тег не может состоять только из одной решётки',
    },
    {
      check: hashtags.some((item) => item.slice(1).includes('#')),
      error: 'хэштеги разделяются пробелами',
    },
    {
      check: hashtags.some((item) => item[0] !== '#'),
      error: 'хэштег начинается с символа # (решётка)',
    },
    {
      check: hashtags.some((item, index, array) => array.includes(item, index + 1)),
      error: 'один и тот же хэштег не может быть использован дважды',
    },
    {
      check: hashtags.some((item) => item.length >= MAX_HASHTAG_SYMBOLS),
      error: `максимальная длина одного хэштега ${MAX_HASHTAG_SYMBOLS} символов, включая решётку`,
    },
    {
      check: hashtags.length > MAX_HASHTAGS,
      error: `нельзя указать больше ${MAX_HASHTAGS} хэштегов`,
    },
    {
      check: hashtags.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д',
    },

  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });

};

export { error, isHashtagValid, isCommentValid };
