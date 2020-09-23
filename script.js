//Create variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Arrays for upper case letters, lower case letters, number, and symbols
var randomUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var randomLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var randomSymbol = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Prompt user to choose how many characters they want their password
function createPassword() {
  characterLimit = prompt(
    "How many characters would you like your password to be? Password length should be between 8 and 128 characters."
  );
  //alert user if their choice is outside of range or not a number
  if (characterLimit < 8 || characterLimit > 128) {
    alert("Password length should be between 8 and 128 characters");
    createPassword();
  }
  //ask user if they would like to have uppercase letters
  var createUpper = confirm(
    "Would you like to have uppercase letters in your password?"
  );
  //ask user if they would like to have lowercase letters
  var createLower = confirm(
    "Would you like to have lowercase letters in your password?"
  );
  // //ask users if they would like numbers in their password
  // var createNumbers = confirm("Would you like numbers in your password");
  // //ask user if they would like symbols in their password
  // var createSymbols = confirm("Would you like symbols in your password?");
}
