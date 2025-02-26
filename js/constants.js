const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const SortFunc = {
  GET_RANDOM_PREVIEWS: () => 0.5 - Math.random(),
  GET_DISCUSSED_PREVIEWS: (a, b) => b.comments.length - a.comments.length,
};

const MAX_PICTURE_COUNT = 10;

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

export { Filter, SortFunc, MAX_PICTURE_COUNT, FILE_TYPES };
