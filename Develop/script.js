// Assignment Code
var generateBtn = document.querySelector("#generate");

// DAN_NOTE:DOCUMENT is the highest element to reference in the web browser basically identifying control over the whole thing. QUERYSELECTOR method returns the first element that matches a specified CSS selector, so in this case its #generate" which is applied to the BUTTON id="generate" in the HTML file. 

// Write password to the #password input
function writePassword() {
    passwordText.value = ""
  var password = getPassword();
//   var passwordText = document.querySelector("#password");

  // DAN_NOTE: the querySelector is being applied to the text area in HMTL where the password is to be displayed.
  passwordText.value = password;
// Dan_Note: This is applying the password password to the text of the password generated being displayed in the browser.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var passwordText = document.querySelector("#password");



// This is the end of the code provided

// This is the start of my code

var potentialChar = ""
var upperCaseChar = 'ABCDEFGHIJKLMKNOPQRSTUVWXYZ';
var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
var digitChar = '0123456789'
var specialChar = ' !"#$%&\')(*+,-./;<=>@?[]^`|}{~ '


function getPassword(){
    console.log(passwordText)
    passwordText.innerHTML="";

var password = {
    pw_length: "",
    // Lets start out assuming we can apply all Characters
    pw_upperCaseChar: true,
    pw_lowerCaseChar: true,
    pw_digitChar: true,
    pw_specialChar :true,
    pw_value: "",
}


alert("Lets set up your password")
// THIS IS THE VALIDATION SECTION THAT IS BROKEN
while(password.pw_length == ""){
    var pw_lengthInput = prompt("How many characters should the password be? Select a number between 8 and 128.")
    console.log("input value " + pw_lengthInput)
    if(pw_lengthInput == NaN){
        alert(`i said select a number, and you said ${pw_lengthInput}! Try again, and pick a number this time`);
    }
    else if(pw_lengthInput >= 8 && pw_lengthInput <= 128){
        password.pw_length = pw_lengthInput;
        console.log("password value " + password.pw_length);
    }

    // else if(pw_lengthInput === NaN{
    //     alert(`i said select a number, and you said ${pw_lengthInput}! Try again, and pick a number this time`);
    //     }

    else{
        console.log("password value " + password.pw_length)
        console.log("input value " + pw_lengthInput)
        alert(`I SAID SELECT A NUMBER BETWEEN 8 AND 128, AND YOU SAID "${pw_lengthInput}"! Please try again.`);
    };
    continue;
};




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

// if (potentialChar == ""){
//     alert("You haven't selected any characters to make up your password, you need SOMETHING! Let's try this again.");
// }else{
//     continue;
// }

// Now lets get some random numbers
// function generateRandomNumber(){
    //we need two values, 1) the length of our possible values string, potentialCharLength, to which we will apply a random index, someRandoIndex, to get a random value; 2) We will do that a forLoopArray number of times, which is the length of our required password. 
    // This will give us the for loop array, or how many times we want to loop.
    var forLoopArray = parseFloat(password.pw_length);
    console.log("length of password: " + forLoopArray)
    // This will give us a random number, someRandoIndex, from which to pull from our potentialChar string
    potentialCharLength = potentialChar.length
    console.log("how many characters we can choose from: " + potentialCharLength)
    var someRandoIndex = Math.floor((Math.random()*potentialCharLength));
    console.log("this is our random index number, (it should change each time we refresh this page): " + someRandoIndex)
    // before we run our for loop, we need to give our password an itial value, otherwise it will show up as "undefined"
    password.pw_Value = potentialChar[someRandoIndex];
    // Now lets do a for loop, forLoopArray number of times minus 1 because we gave password.pw_Value an initial character value
    for (let index = 0; index < (forLoopArray-1); index++) {
        var someRandoIndex = Math.floor((Math.random()*(potentialCharLength)));
        console.log("this is our initial password: " + password.pw_Value);
        console.log(someRandoIndex);
        password.pw_Value += potentialChar[someRandoIndex]; 

    }
    console.log(password.pw_Value)
    console.log(password.pw_Value.length)
    return password.pw_Value;

}


// getPassword()