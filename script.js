//Create variables
//variables for password characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var numbers = "1234567890";

//variables for possible characters and for password
var possibleCharacters = "";
var password = "";

//variables for generate button and password text
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Prompt user to write how many characters they want their password
function writePassword() {
  characterLimit = prompt(
    "How many characters would you like your password to be? Password length should be between 8 and 128 characters."
  );
  //Alert user if their choice is outside of character range or not a number
  if (characterLimit < 8 || characterLimit > 128) {
    alert("Password length should be between 8 and 128 characters");
    writePassword();
  }
  var includeUpper = confirm(
    "Would you like uppercase letters in your password?"
  );
  var includeLower = confirm(
    "Would you like lowercase letters in your password?"
  );
  var includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  var includeSymbols = confirm(
    "Would you like to include symbols in your password?"
  );
}
