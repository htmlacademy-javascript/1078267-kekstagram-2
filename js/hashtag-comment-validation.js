const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

const isCommentValid = (value) => {

  if (value.length > MAX_COMMENT_LENGTH) {
    return false;
  }
  return true;
};

const validHashtagRegular = /^#[a-za-яё0-9]{1,19}$/i;

const isHashtagValid = (value) => validHashtagRegular.test(value);

const isHashtagsValid = (hashtagArray) => {
  if (hashtagArray.length > MAX_HASHTAGS) {
    return false;
  }

  const parsedHashtags = hashtagArray.map((element) => element.toLowerCase());
  const uniqueHashtags = new Set(parsedHashtags);


  if (parsedHashtags.length !== uniqueHashtags.size) {
    return false;
  }


  return hashtagArray.every(isHashtagValid);
};

const validateHashtagField = (value) => {
  const hashtagsArrey = value.split(' ').filter((element) => Boolean(element));

  return isHashtagsValid(hashtagsArrey);

};

export {validateHashtagField, isCommentValid };
