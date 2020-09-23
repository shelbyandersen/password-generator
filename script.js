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
  //confirm if user wants uppercase letters in their password
  var includeUpper = confirm(
    "Would you like uppercase letters in your password?"
  );
  //confirm if user wants lowercase letters in their password
  var includeLower = confirm(
    "Would you like lowercase letters in your password?"
  );
  //confirm if user wants numbers in their password
  var includeNumbers = confirm(
    "Would you like to include numbers in your password?"
  );
  //confirm if user wants symbols in their password
  var includeSymbols = confirm(
    "Would you like to include symbols in your password?"
  );

  //User must choose at least one variable for password to generate - if user chooses more than 1, those variable types are added to password string
  if (includeUpper) {
    possibleCharacters += upper;
  }
  if (includeLower) {
    possibleCharacters += lower;
  }
  if (includeNumbers) {
    possibleCharacters += numbers;
  }
  if (includeSymbols) {
    possibleCharacters += includeSymbols;
  }

  for (var i = 0; i < characterLimit; i++) {
    password +=
      possibleCharacters[
        Math.floor((Math.random() = possibleCharacters.length))
      ];
  }

  //value for password - code from class
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate password - code from class
generateBtn.addEventListener("click", writePassword);
