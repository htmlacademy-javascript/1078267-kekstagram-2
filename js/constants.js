const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const SortFunc = {
  RANDOM: () => 0.5 - Math.random(),
  DISCUSSED: (a, b) => b.comments.length - a.comments.length,
};

const MAX_PICTURE_COUNT = 10;

const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];

export { Filter, SortFunc, MAX_PICTURE_COUNT, FILE_TYPES };
