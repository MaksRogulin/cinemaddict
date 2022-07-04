const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

const generateRandomArray = (array, minLength = 0, maxLength = array.length) => {
  let temp;
  let j;
  for (let i = array.length - 1; i > 0; i--) {
    j = getRandomInteger(0, i);
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  array.length = getRandomInteger(minLength, maxLength);
  return array;
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export { generateRandomArray, getRandomInteger, getRandomArrayElement, createElement, RenderPosition };