function isPalindrome(word) {
  // Write your algorithm here
  let wordSplit = word.split("");

  let flippedWord = [];
  wordSplit.map((word) => {
    flippedWord.unshift(word);
  });

  if (word === flippedWord.join("")) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  string should equal forward and backwards
  split string into array
  use array method
  compare
*/

/*
  Add written explanation of your solution here
  Use split method so the string turns into an array with each letter.
  Now we can easily iterate over it with an array method
  such as .map. The goal is to see if the string is the same
  forwards and backwards. So create a new empty array and insert
  them with unshift, so that it adds them from the start. Using 
  methods such as .push, will add each letter to the end, which
  only recreates the same word. Then join the new flipped string, 
  and compare it with the orginal string to return true or false. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
