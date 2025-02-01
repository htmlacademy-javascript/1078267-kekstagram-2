const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const renderPreview = (photoArray) => {
  photoArray.forEach(({id, url, comments, likes}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.dataset.pictureId = id;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;

    picturesFragment.appendChild(picture);
  });
  pictures.appendChild(picturesFragment);
};

export {pictures, renderPreview};
