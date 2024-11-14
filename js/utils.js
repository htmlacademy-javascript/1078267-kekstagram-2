const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const findTemplate = (id) => {
  const template = document.getElementById(id);

  if (!template) {
    throw new Error(`Шаблон не найден: ${id}`);
  }
  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`Элемент не шаблон: ${id}`);
  }

  return template.content.firstElementChild;
};

/**
 * @template Item
 * @param {Item[]} items
 * @param {(item: Item) => HTMLElement} makeElement
 * @param {HTMLElement} container
 */

const createFragment = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => fragment.appendChild(makeElement(item)));
  container.appendChild(fragment);
};

export {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  createIdGenerator,
  findTemplate,
  createFragment
};


