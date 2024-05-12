// Your tests here
const { isPalindrome } = require('../utils');

test('returns true for a palindrome', () => {
  expect(isPalindrome("racecar")).toBe(true);
});

test('returns false for a non-palindrome', () => {
  expect(isPalindrome("car")).toBe(false);
});
