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
