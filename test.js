"use strict";
const assert = require("assert");
const { normalize } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// added in to get prompt in terminal
var prompt = require("prompt-sync")();
// brings in the readline module to access the command line
// use the readline module to print out to the command line

const userInput = prompt("Enter your sentence:");
console.log(userInput);
const noSpecialCharacters = userInput.replace(/[^a-zA-Z]/g, "").toLowerCase();
console.log(typeof noSpecialCharacters);
console.log(noSpecialCharacters);

const newArray = Array.from(noSpecialCharacters);
console.log(newArray);

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
const finalResult = keys.forEach((key) => {
  const result = `There are ${counterObject[key]} - ${key.toUpperCase()}'s`;
  console.log(result);
});

const getPrompt = () => {
  rl.question("what is your sentence?: ", (string) => {
    charCount(string, letter);
    console.log("Here is your letter count;", letterCount);

    getPrompt();
  });
};
getPrompt();

// Tests
if (typeof describe === "function") {
  describe("#testing sentence with special characters", () => {
    it("should eliminate special characters from return statement", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.owner, "James Doe");
      assert.equal(acct1.accountNumber, "xx4432");
      assert.equal(acct1.transactions.length, 0);
      assert.equal(acct1.balance(), 0);
    });
  });
  describe("#testing account balance", () => {
    it("should create a new account correctly", () => {
      let acct1 = new BankAccount("xx4432", "James Doe");
      assert.equal(acct1.balance(), 0);
      acct1.deposit(100);
      assert.equal(acct1.balance(), 100);
      acct1.charge("Target", 10);
      assert.equal(acct1.balance(), 90);
    });
  });
}
