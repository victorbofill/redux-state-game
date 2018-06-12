export const IMAGES_LOAD = 'IMAGES_LOAD';

export const getImages = state => state.images;

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export function images(state = [], { type, payload }) {
  switch (type) {
    case IMAGES_LOAD:
    {
      const shuffledPayload = shuffle(payload);
      const imagesArray = [];
      imagesArray.push(shuffledPayload.slice(0, 7));
      imagesArray.push(shuffledPayload.slice(8, 15));
      imagesArray.push(shuffledPayload.slice(16, 23));
      return imagesArray;
    }
    default:
      return state;
  }
}