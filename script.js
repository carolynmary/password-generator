// characters to be included in password
var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Var to store user's password after it's generated
var usersPassword = ""

// ======= (START) Function to generate password with user's input =======
function generatePasswordStart() {
  // Var to store user's input
  var usersCharCriteria = [];
  // Collecting user's password criteria:
  var passwordLength = prompt("How many characters would you like your password to be? (min 8, max 128)");
  if (passwordLength < 8 || passwordLength > 128) { // checking if character length is ok
    alert("Password must be between 8 and 128 characters. Please start again.");
    return;
  }
  if (passwordLength !== Number) { // checking if answer is a number
    alert("Password length must be entered as a number. Please start again.");
    return;
  }
  var wantLowercase = confirm("Would you like your password to contain lowercase characters?")
  var wantUppercase = confirm("Would you like your password to contain uppercase characters?")
  var wantSpecial = confirm("Would you like your password to contain special characters?")
  var wantNumbers = confirm("Would you like your password to contain numbers?")
  if (wantLowercase === false && wantUppercase === false && wantSpecial === false && wantNumbers === false) { // checking that at least one confirm is true
    alert("At least one character type must be selected. Please start again.");
    return;
  }
  // NESTED FUNCTION: Generating password according to user's password criteria
  function generatePassword() {
    // For loop to push one random (true)character to [usersCharCriteria]
    for (var i = 0; i < passwordLength; i++) {
      if (wantLowercase) {
        usersCharCriteria.push(lowerCasedCharacters[Math.floor(Math.random() * 10)])
      }
      if (wantUppercase) {
        usersCharCriteria.push(upperCasedCharacters[Math.floor(Math.random() * 10)])
      }
      if (wantSpecial) {
        usersCharCriteria.push(specialCharacters[Math.floor(Math.random() * 10)])
      }
      if (wantNumbers) {
        usersCharCriteria.push(numericCharacters[Math.floor(Math.random() * 10)])
      }
    }
    // Converts generated password from an array to a string and slices it to the selected password length
    usersPassword = usersCharCriteria.join("").slice(0, passwordLength);
    return usersPassword;
  }
  // Function call(s)
  generatePassword();
} // ======= (END) generatePasswordStart() =======

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to display generated password to the #password text area
function start() {
  generatePasswordStart();
  document.querySelector("#password").innerHTML = usersPassword;
}

// Adds event listener to generate button
generateBtn.addEventListener("click", start);