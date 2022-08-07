// "use strict";
// brings in the readline module to access the command line
// const readline = require("readline");
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const userInput = "This is my7 sent&ence fr?om the user";
console.log(userInput);
const noSpecialCharacters = userInput.replace(/[^a-zA-Z]/g, "").toLowerCase();
console.log(typeof noSpecialCharacters);
console.log(noSpecialCharacters);

const newArray = Array.from(noSpecialCharacters);
console.log(newArray);
// const noSpecialArray = noSpecialCharacters.split("");
// console.log(noSpecialArray);

let counter = (arr) => {
  return arr.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
};
counter(newArray);
console.log(counter(newArray));
const counterObject = counter(newArray);
console.log(counterObject);
const keys = Object.keys(counterObject);
console.log(keys);
keys.forEach((key) => {
  const result = `There are ${counterObject[key]} - ${key.toUpperCase()}'s`;
  console.log(result);
});

// const finalLetterCounter = userStrToArr.map((letters) => {
//   const charCount = (string, letter) => {
//     let letterCount = 0;
//     for(i=0, i<string.length; i++) {
//   if(string.charAt(i) == letter) {
//     letterCount += 1;
//   }
//     }
//     return letterCount;
//   };

// });
// const justLetters = userStrToArr.filter(lettersOnly);

// const lettersOnly = userStrToArr.filter((letter, index) => {
//   console.log(userStrToArr.indexOf(letter), index);
//   if (userStrToArr.indexOf(letter) == index) {
//     console.log(`${letter} appears `);
//   }
// });
// console.log(lettersOnly);
// const getPrompt = () => {
//   rl.question("what is your sentence?: ", (string) => {
//     charCount(string, letter);
//     console.log("Here is your letter count;", letterCount);

//     getPrompt();
//   });
// };
// getPrompt();
