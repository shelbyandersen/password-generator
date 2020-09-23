//Create variables for password characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$^&%*()+=-[]{}|:<>?,.";
var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// // Write password to the #password input - code from class
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button - code from class
generateBtn.addEventListener("click", createPassword);

// //Prompt user to choose how many characters they want their password
// function createPassword() {
//   characterLimit = prompt(
//     "How many characters would you like your password to be? Password length should be between 8 and 128 characters."
//   );
//   //Alert user if their choice is outside of character range or not a number
//   if (characterLimit < 8 || characterLimit > 128) {
//     alert("Password length should be between 8 and 128 characters");
//     createPassword();
//   }
//   //Ask user if they would like to have uppercase letters
//   var createUpper = confirm(
//     "Would you like to have uppercase letters in your password?"
//   );
//   //Ask user if they would like to have lowercase letters
//   var createLower = confirm(
//     "Would you like to have lowercase letters in your password?"
//   );
//   //Ask users if they would like numbers in their password
//   var createNumber = confirm("Would you like numbers in your password");
//   //Ask user if they would like symbols in their password
//   var createSymbol = confirm("Would you like symbols in your password?");
// }

// //Conditions based on User Input
// if (createUpper === yes) {
//   possibleCharacters += randomUpper;
// }
// if (createLower) {
//   possibleCharacters += randomLower;
// }
// if (createNumber) {
//   possibleCharacters += randomNumber;
// }
// if (createSymbol) {
//   possibleCharacters += randomSymbol;
// } else if (createUpper && createLower && createNumber && createSymbol) {
//   alert("Please include at least one value to generate your password");
// }
