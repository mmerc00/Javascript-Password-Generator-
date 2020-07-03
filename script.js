// Assignment Code
var generateBtn = document.querySelector("#generate");
//established variables and console logged it for full visibility for ourselves
var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "1234567890";
var symbolChar = "~!@#$%^&*()_+";

//links with button with user submission and declares passwordlength which will be used in if statement
//used parseint which converted the string to a #
function generatePassword() {
  var passwordLength = parseInt(prompt("how long do you want your password?"));
  //this is the alert when the user to re-enter new length
  if (passwordLength > 128 || passwordLength < 8) {
    alert("please choose a new number");
    return generatePassword();
  }

  // questions for user and declairing "has x, y ,z"
  var hasNumbers = confirm("do you want numbers in your password?");
  var hasSymbols = confirm("do you want symbols in your password?");
  var hasLower = confirm("do you want lowercase numbers in your password?");
  var hasUpper = confirm("do you want uppercase letters your password?");

  // (!(hasNumbers && hasSymbols && hasLower && hasUpper)) { makes ||| entire statement true
  if (hasNumbers || hasSymbols || hasLower || hasUpper) {
    console.log("true");
  } else {
    alert("please select atleast one of the options");
    // return generatePassword();
    return "";
  }

  //strings with collected info stores below
  var majorBank = "";
  var newpassword = "";

  if (hasNumbers) {
    // draws from bank and adds random number to string
    majorBank += numberChar;
    newpassword += randomCharFromString(numberChar);
  }

  if (hasSymbols) {
    // draws from major bank adds symbols to numbers
    majorBank += symbolChar;
    newpassword += randomCharFromString(symbolChar);
  }

  if (hasUpper) {
    // draws from major bank adds uppercase symbols and numbers
    majorBank += alphabetUpperCase;
    newpassword += randomCharFromString(alphabetUpperCase);
  }

  if (hasLower) {
    // draws from major bank adds lowercase to uppercase, symbols and numbers
    majorBank += alphabetLowerCase;
    newpassword += randomCharFromString(alphabetLowerCase);
  }

  //for loop that connects ifs with the new password with user length input
  for (var i = newpassword.length; i < passwordLength; i++) {
    newpassword += randomCharFromString(majorBank);
  }

  //
  return newpassword;
}
//random charr from string then is met with random math which jumbles it all together and returns the result
function randomCharFromString(string) {
  return string[Math.floor(Math.random() * string.length)];
}
//given code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
