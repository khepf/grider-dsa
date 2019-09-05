const chunk = require('./index');
const chunk1 = chunk.chunk1;
const chunk2 = chunk.chunk2;


test('functions chunk 1 and 2 exist', () => {
  expect(typeof chunk1).toEqual('function');
  expect(typeof chunk2).toEqual('function');
});

test('chunk1 divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk1(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});
test('chunk2 divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk2(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk1 divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk1(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});
test('chunk2 divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk2(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk1 divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk1(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});
test('chunk2 divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk2(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test('chunk1 divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk1(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});
test('chunk2 divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk2(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});
