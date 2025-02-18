const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
socialComments.innerHTML = '';

const creatCommentTemplate = (comment) => {
  const socialComment = socialCommentTemplate.cloneNode(true);

  socialComment.querySelector('.social__picture').src = comment.avatar;
  socialComment.querySelector('.social__picture').alt = comment.name;
  socialComment.querySelector('.social__text').textContent = comment.message;

  return socialComment;
};

const onLoadMoreButtonClick = () => {
  const socialCommentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const socialCommentNode = creatCommentTemplate(comment);
    socialCommentsFragment.appendChild(socialCommentNode);
  });

  socialComments.appendChild(socialCommentsFragment);
  commentsCount.firstChild.textContent = `${renderedCommentsLength}`;
  commentsCount.querySelector('.social__comment-total-count').textContent = comments.length;
  if (renderedCommentsLength >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', onLoadMoreButtonClick);
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  onLoadMoreButtonClick();

  commentsLoader.addEventListener('click', onLoadMoreButtonClick);
};

export {clearComments, renderComments};

