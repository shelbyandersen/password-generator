//Generate Functions for random upper case letters, lower case letters, symbols, and numbers.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());