const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const SortFunc = {
  RANDOM: () => 0.5 - Math.random(),
  DISCUSSED: (a, b) => b.comments.length - a.comments.length,
};

const MAX_PICTURE_COUNT = 10;

export { FILTER, SortFunc, MAX_PICTURE_COUNT };
