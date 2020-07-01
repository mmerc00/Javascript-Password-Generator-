// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;

var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log;
var alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log;
var num = "1234567890".split("");
console.log;
var sym = "~!@#$%^&*()_+".split("");
var majorBank = "~!@#$%^&*()_+1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
console.log;

// Write password to the #password input
function generatePassword() {
  passwordLength = prompt("how long do you want your password?");
  if (passwordLength > 128 || passwordLength < 8) {
    alert("please choose a new number");
    return generatePassword();
  }

  var numbers = false;
  var symbols = false;
  var caps = false;
  var lowercase = false;
  var caps = false;
  var confirms = 0;

  //empty on purpose
  var newpassword = [];

  // False at first. Later these confirms will be used

  numbers = confirm("do you want numbers in your password?");
  console.log(numbers);
  symbols = confirm("do youwant symbols in your password?");
  console.log(symbols);
  alphabetLowercase = confirm(
    "do you want lowercase numbers in your password?"
  );
  console.log;
  alphabetCaps = confirm("do you want uppercase letters your password?");
  console.log();

  //function pull from index

  //

  if (numbers) {
    confirms = confirms + 1;
  }

  if (symbols) {
    confirms = confirms + 1;
  }
  if (caps) {
    confirms = confirms + 1;
  }
  if (lowercase) {
    confirms = confirms + 1;
  }
  console.log(confirms);

  //user selects

  if (numbers) {
    newpassword.push(num[randomPull(num)]);
  }
  //pushes into empty var

  if (symbols) {
    newpassword.push(sym[randomPull(sym)]);
  }

  if (lowercase) {
    newpassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  if (caps) {
    newpassword.push(alphabetCaps[randomPull(alphabetCaps)]);
  }
  console.log(newpassword);

  //for loop

  for (var i = 0; i < passwordLength - confirms; i++) {
    newpassword.unshift(majorBank[randomPull(majorBank)]);
  }

  //before array now string
  newpassword = newpassword.join("");
  console.log(newpassword);
  return newpassword;
}

//orchestrates the if statements

function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
