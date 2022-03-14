import { sortInAscending, sortInDescending } from './sortArray';

const strings = ['March', 'Jan', 'Feb', 'Dec'];
const numbers = [4, 23, 7, 39, 19, 0, 9, 14];

describe('sort in ascending', () => {
  it('is strings sorted in ascending order', () => {
    expect(sortInAscending(strings)).toEqual(['Dec', 'Feb', 'Jan', 'March']);
  });

  it('is numbers sorted in ascending order', () => {
    expect(sortInAscending(numbers)).toEqual([0, 4, 7, 9, 14, 19, 23, 39]);
  });
});

describe('sort in descending', () => {
  it('is strings sorted in descending order', () => {
    expect(sortInDescending(strings)).toEqual(['March', 'Jan', 'Feb', 'Dec']);
  });

  it('is numbers sorted in descending order', () => {
    expect(sortInDescending(numbers)).toEqual([39, 23, 19, 14, 9, 7, 4, 0]);
  });
});
