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
