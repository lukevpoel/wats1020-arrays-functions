// This is the file where you will write the Truncate Words function and related code.
"use strict";

var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
var charLimit = 60;
var shortChar = truncateCharacters(originalText, charLimit);


// Create a Function called truncateWords() that accepts two arguments:
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)
function truncateWords(longText, numWords){

  // 1. Use the split() function to split the String into an Array
  var longTextArray = longText.split(' ');

  // 2. Use the length attribute to find the number of words in the Array
  var longTextLength = longTextArray.length;

  // 3. Determine how many words should be removed from the String
  var removeWords = longTextLength-numWords;

  // 4. Remove those words from the Array
  // 5. Add an additional String item to the Array to put an ellipses in: "..."
  longTextArray.splice(numWords, removeWords, "...");

  // 6. Use the join() function to convert the Array back into a String
  var finShortText = longTextArray.join(" ");

  // 7. Return the truncated String from the Function
  return finShortText;
}

//limiting length of the string by character length
function truncateCharacters(longChar, charNumLimit) {

  //split longChar into an Array
  var longCharArray = longChar.split("");

  //finding the number of characters in the string
  var longCharLength = longCharArray.length;

  //number of characters to remove
  var removeChar = longCharLength-charNumLimit;

  //cut off any more than 60 characters from the end
  longCharArray.splice(charNumLimit, removeChar, "...");

  //turn the array back into a string
  var endChar = longCharArray.join("");

  //print the string
  return endChar;
}

//print all results to the console
console.log('shortChar ' + shortChar)
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
