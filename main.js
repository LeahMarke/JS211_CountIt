"use strict";
const displayResults = () => {
  const showResults = document.getElementById("display-element");
  const userInput = document.getElementById("user-input").value;
  const noSpecialCharacters = userInput.replace(/[^a-zA-Z]/g, "").toLowerCase();

  const newArray = Array.from(noSpecialCharacters);

  let counter = (arr) => {
    return arr.reduce((acc, cur) => {
      acc[cur] ? acc[cur]++ : (acc[cur] = 1);
      return acc;
    }, {});
  };
  counter(newArray);
  const counterObject = counter(newArray);
  const keys = Object.keys(counterObject);
  const finalResult = keys.forEach((key) => {
    const result = `There are ${counterObject[key]} - ${key.toUpperCase()}'s`;
    // console.log(result);
    showResults.insertAdjacentHTML(
      "afterbegin",
      `
    <p>${result}</p>
    `
    );
  });
};
// const sentencePigLatin = (sentence) => {
//   // place all words into an Array , then capture array
//   sentence = document.getElementById("user-input").value;
//   let newArray = sentence.split(" ");
//   // [I, am, happy, today]
//   // need to seperate each word out into it's own array
//   let seperateWord = newArray.map((word) => pigLatin(word));
//   // loop through each word in the array and then each character like previously
//   // join back to a string
//   let newPigSentence = seperateWord.join(" ");
//   const newElement = document.createElement("p");
//   newElement.innerHTML = newPigSentence;
//   document.getElementById("display-element").appendChild(newElement);
// };
