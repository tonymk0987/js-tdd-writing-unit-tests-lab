// Your code here
function isPalindrome(word) {
    const lowercaseWord = word.toLowerCase();
    if (lowercaseWord.length === 0 || !/^[a-z]+$/.test(lowercaseWord)) {
      throw new Error('Input must be a non-empty string containing only alphabetic characters');
    }
    return lowercaseWord === lowercaseWord.split('').reverse().join('');
  }
  module.exports = { isPalindrome };
  