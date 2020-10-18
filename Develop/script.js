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




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Dan_Note: the line above is saying: to the element "generateBTN", add an event. The event is click and when that click event happens, start the writePassword function. generateBtn is at the top of this page.




// This is the end of the code provided

