import extractObjKeys from './extractObjKeys';

const user = { title: 'Mr.', first: 'Howie', last: 'Wang' };

it('are all object keys extracted', () => {
  expect(extractObjKeys(user)).toEqual(['title', 'first', 'last']);
});
