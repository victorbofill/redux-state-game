
import { IMAGES_LOAD, images } from './reducers';

const images1 = [];

describe('image loader', () => {

  it('loads arrays of images', () => {
    const state = images(images1, { type:IMAGES_LOAD, payload:[] });
    expect(state).toEqual([]);
  });

});