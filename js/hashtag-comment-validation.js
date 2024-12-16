const MAX_HASHTAGS = 5;
const MAX_COMMENT_LENGTH = 140;

// let errorMessage = '';
// const error = () => errorMessage;

const isCommentValid = (value) => {
  // errorMessage = '';

  if (value.length <= MAX_COMMENT_LENGTH) {
    return true;
  }

};

const isHashtagValid = (value) => {
  const hashtag = value.split(' ');
  const validHashtagRegular = /^#[a-z-я-ё0-9]{1,19}$/i;
  let i = 0;
  const regularTest = validHashtagRegular.test(hashtag[i]);

  while(regularTest) {
    i++;
    if (regularTest === false) {
      break;
    }
    return regularTest;
  }
};


// const isHashtagRegularValid = (value) => {
//   const hashtag = value.split(' ');
//   const validHashtagRegular = /^#[a-z-я-ё0-9]{1,19}$/i;
//   let i = 0;
//   const regularTest = validHashtagRegular.test(hashtag[i]);

//   while(regularTest) {
//     i++;
//     if (regularTest === false) {
//       break;
//     }
//     return regularTest;
//   }
// };

//создать массив из isHashtagRegularValid

// isHashtagValid(isHashtagRegularValid);


export {isHashtagValid, isCommentValid };

// const isCommentValid = (comment, id, comments) => { тут пишем логику для валидации одного коммента }
// hashtags.every(isCommentValid)
