// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// asdfasdf
let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let specialArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '`', '-', '+', '=', '_', '|', '[', ']', '{', '}', '~', ':', ';', '<', '>', '/', '.', ','];

// gen password function with if statments

function generatePassword() {

  let length = parseInt(prompt('How many characters does your new password require? Min=8 Max=128'));

  if (length < 8 || length > 128) {
    return alert('Password Parameters Not Met');
  }

  let shouldIncludeLower = confirm('Would you like to include lower case in your password?')
  let shouldIncludeUpper = confirm('Would you like to include upper case in your password?')
  let shouldIncludeNumber = confirm('Would you like to include numbers in your password?')
  let shouldIncludeSpecial = confirm('Would you like to include special characters in your password?')


  if (
    !shouldIncludeLower &&
    !shouldIncludeUpper &&
    !shouldIncludeNumber &&
    !shouldIncludeSpecial
  ) {
    return alert('Please select atleast one character type')
  }

  let cauldron = [];
  let result = [];

  if (shouldIncludeLower) {
    //add lowercase array to cauldron
    cauldron = cauldron.concat(lowerCaseArray)

  }

  if (shouldIncludeUpper) {
    //add lowercase array to cauldron
    cauldron = cauldron.concat(upperCaseArray)

  }

  if (shouldIncludeNumber) {
    //add lowercase array to cauldron
    cauldron = cauldron.concat(numberArray)

  }

  if (shouldIncludeSpecial) {
    //add lowercase array to cauldron
    cauldron = cauldron.concat(specialArray)

  }

  
  /* Loop through length times
  
        Generate random number between 0 and length of cauldron
  
        Create variable of cauldron[random]
  
        Add cauldron to result
  
   */
  // return result.join('');

  // for (let i = 0; i < length; i++); {
  //   blank = Math.floor(Math.random () * cauldron.length -1);
  //   final += cauldron [blank];
  // }
  return result;
}
