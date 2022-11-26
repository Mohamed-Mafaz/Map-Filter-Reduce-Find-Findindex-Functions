import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "../src/emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map Function - Create a new array by doing something with each item in an array.

const new1 = numbers.map(function (x) {
  return x + 10;
});
console.log(new1);

// or

const New1 = numbers.map((x) => x + 20);
console.log(New1);

//Filter Function - Create a new array by keeping the items that return true.

const new2 = numbers.filter(function (num) {
  return num < 10;
});
console.log(new2);

// or

const New2 = numbers.filter((num) => num < 3);
console.log(New2);

//Reduce Function - Accumulate a value by doing something to each item in an array.

const new3 = numbers.reduce(function (accumulate, no) {
  return accumulate - no;
});
console.log(new3);

// or

const New3 = numbers.reduce((accumulate, No) => accumulate + No);
console.log(New3);

//Find Function - find the first item that matches from an array.

const new4 = numbers.find(function (y) {
  return y < 3;
});
console.log(new4);

// or

const New4 = numbers.find((y) => y < 5);
console.log(New4);

//FindIndex Function - find the index of the first item that matches.

const new5 = numbers.findIndex(function (z) {
  return z >= 56;
});
console.log(new5);

// or

const New5 = numbers.findIndex((z) => z <= 2);
console.log(New5);

//Map - Create a new array by doing something with each item in an emojipedia array.

const new6 = emojipedia.map(function (a) {
  return a.meaning.substring(0, 100);
});
console.log(new6);

// or

const New6 = emojipedia.map((a) => a.name.slice(5, 12));
console.log(New6);
