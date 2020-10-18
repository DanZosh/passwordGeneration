// Assignment Code
var generateBtn = document.querySelector("#generate");

// DAN_NOTE:DOCUMENT is the highest element to reference in the web browser basically identifying control over the whole thing. QUERYSELECTOR method returns the first element that matches a specified CSS selector, so in this case its #generate" which is applied to the BUTTON id="generate" in the HTML file. 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // DAN_NOTE: the querySelector is being applied to the text area in HMTL where the password is to be displayed.
  passwordText.value = password;
// Dan_Note: This is applying the password password to the text of the password generated being displayed in the browser.



var potentialChar = ""
var upperCaseChar = 'ABCDEFGHIJKLMKNOPQRSTUVWXYZ';
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var digitChar = '0123456789'
var specialChar = '!@#$%&?~'
var password = {
    pw_length: "",
    // Lets start out assuming we can apply all Characters
    pw_upperCaseChar: true,
    pw_lowerCaseChar: true,
    pw_digitChar: true,
    pw_specialChar :true,
    pw_value: "",
}


console.log(potentialChar)


// Playing with compiling a potential characters list
// console.log(potentialChar)
// var num1= lowerCaseChar[8]
// var num2= lowerCaseChar[5]
// console.log(num1);
// console.log(num2);
// console.log(num2 + num1);
// // potentialChar += num1 + num2
// potentialChar += upperCaseChar + lowerCaseChar 
// console.log(potentialChar)

alert("Lets set up your password")
var pw_length= "";
// THIS IS THE VALIDATION SECTION THAT IS BROKEN
// while(pw_length == ""){
//     var pw_lengthInput = prompt("How many characters should the password be? Select a number between 8 and 128.")
//     console.log(pw_lengthInput)
//     if(pw_lengthInput >= 8 && pw_lengthInput <= 128){
//         pwlength = pw_lengthInput;
//         console.log(pw_length);
//     }
//     else{
//         alert(`I TOLD YOU TO SELECT A NUMBER BETWEEN 8 AND 128, AND YOU SAID "${pw_lengthInput}"! Please try again.`);
//     };
// };
var pw_length = prompt("How many characters should the password be? Select a number between 8 and 128")
console.log(pw_length)

alert("Select your password character options")
//Should we add upper case characters to the password?
var upperCaseConfirm = confirm("Do You want to include upper case letters")
console.log(upperCaseConfirm)
if (upperCaseConfirm ==true){
    console.log(upperCaseConfirm)
}else{
    password.pw_upperCaseChar = false;
}

// Should we add upper case characters to the available characters string?
console.log(password.pw_upperCaseChar)
if (password.pw_upperCaseChar){
    potentialChar += upperCaseChar
    }
console.log(potentialChar)

//Should we add lower case characters to the password?

var lowerCaseConfirm = confirm("Do You want to include lower case letters")
console.log(lowerCaseConfirm)
if (lowerCaseConfirm ==true){
    console.log(lowerCaseConfirm)
}else{
    password.pw_lowerCaseChar = false;
}

// Should we add lower case characters to the available characters string?
console.log(password.pw_lowerCaseChar)
if (password.pw_lowerCaseChar){
    potentialChar += lowerCaseChar
    }
console.log(potentialChar)

    //Should we add digits to the password?

    var digitConfirm = confirm("Do You want to include digits")
console.log(digitConfirm)
if (digitConfirm ==true){
    console.log(digitConfirm)
}else{
    password.pw_digitChar = false;
}

// Should we add digits to the available characters string?
console.log(password.pw_digitChar)
if (password.pw_digitChar){
    potentialChar += digitChar
    }
console.log(potentialChar)

        //Should we add special characters to the password?

        var specialCharConfirm = confirm("Do You want to include special characters")
console.log(specialCharConfirm)
if (specialCharConfirm ==true){
    console.log(specialCharConfirm)
}else{
    password.pw_specialChar = false;
}

// Should we add digits to the available characters string?
console.log(password.pw_specialChar)
if (password.pw_specialChar){
    potentialChar += specialChar
    }
console.log(potentialChar)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Dan_Note: the line above is saying: to the element "generateBTN", add an event. The event is click and when that click event happens, start the writePassword function. generateBtn is at the top of this page.

