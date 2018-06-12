export const IMAGES_LOAD = 'IMAGES_LOAD';

export const getImages = state => state.images;

export function images(
  state = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']],
  { type, payload }) {

  switch (type) {
    case IMAGES_LOAD:
      return payload;
    default:
      return state;
  }
}