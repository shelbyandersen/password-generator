//Create variables
//variables for password characters
var upper = ["A", "B", "C", "D"];
var lower = ["a", "b", "c"];
var special = ["@", "$", "!"];
var numbers = ["1", "2", "3"];

//variables for possible characters and for password
var possibleCharacters = [];
var password = [];

//variables for generate button and password text
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

//Prompt user to type how many characters they want their password
function writePassword() {
  password.length = 0;
  var characterLimit = prompt(
    "How many characters would you like your password to be? Password length should be between 8 and 128 characters."
  );
  var parsedCharacterLimit = parseInt(characterLimit, 10);

  //Alert user if their choice is outside of character range or not a number
  if (
    parsedCharacterLimit < 8 ||
    parsedCharacterLimit > 128 ||
    isNaN(parsedCharacterLimit)
  ) {
    alert("Please choose a number between 8 and 128.");
    return "Try again";
  } else {
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
  if (includeUpper === true) {
    possibleCharacters = possibleCharacters.concat(upper);
  }
  if (includeLower) {
    possibleCharacters = possibleCharacters.concat(lower);
  }
  if (includeNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (includeSymbols) {
    possibleCharacters = possibleCharacters.concat(special);
  } else if (
    !includeUpper &&
    !includeLower &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please include at least one variable to generate password");
  }

  var randomCharacterValue = "";

  for (var i = 0; i < parsedCharacterLimit; i++) {
    randomCharacterValue =
      possibleCharacters[Math.floor(possibleCharacters.length * Math.random())];
    password.push(randomCharacterValue);
  }
  var joinedPassword = password.join("");
  passwordText.value = joinedPassword;
}

// Add event listener to generate password - code from class
generateBtn.addEventListener("click", writePassword);
