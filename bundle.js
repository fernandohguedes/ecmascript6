"use strict";

// operações em Arrays
var array = [1, 3, 4, 5, 8, 9]; // função MAP

var newArray = array.map(function (item) {
  return item;
});
console.log(newArray); // função reduce

var soma = array.reduce(function (total, next) {
  return total + next;
});
console.log(soma); // função filter

var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // função find

var find = array.find(function (item) {
  return item === 4;
});
console.log(find);
