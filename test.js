// "use strict";
// brings in the readline module to access the command line
// const readline = require("readline");
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


const userInput = "This is my sentence from the user";
const userStrToArr = userInput.split("");
console.log(userStrToArr);

const finalLetterCounter = userStrToArr.map((letters) => {
  const charCount = (string, letter) => {
    let letterCount = 0;
    for(i=0, i<string.length; i++) {
  if(string.charAt(i) == letter) {
    letterCount += 1;
  }
    }
    return letterCount;
  };
  
});
// const justLetters = userStrToArr.filter(lettersOnly);

const lettersOnly = userStrToArr.filter((letter, index) => {
  console.log(userStrToArr.indexOf(letter), index);
  if (userStrToArr.indexOf(letter) == index) {
    console.log(`${letter} appears `);
  }
});
console.log(lettersOnly);
// const getPrompt = () => {
//   rl.question("what is your sentence?: ", (string) => {
//     charCount(string, letter);
//     console.log("Here is your letter count;", letterCount);

//     getPrompt();
//   });
// };
// getPrompt();
