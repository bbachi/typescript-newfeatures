"use strict";
exports.__esModule = true;
var Calculator_1 = require("./Calculator");
var cal = new Calculator_1.Calculator();
console.log('Adding two number 10 and 8');
var x = cal.add(10, 8);
console.log('Ouput::' + x);
console.log('Subtracting two number 10 and 8');
x = cal.subtract(10, 8);
console.log('Ouput::' + x);
console.log('Multiplying two number 10 and 8');
x = cal.multiply(10, 8);
console.log('Ouput::' + x);
var numArry = [3, 5, 6, 7, 8, 9];
console.log('Getting the sum of numbers');
x = cal.sumOfArray(numArry);
console.log('Ouput::' + x);
var newArry = [10, 5, 6, 7, 8, 9];
console.log('Getting the sum of numbers with new readonly');
x = cal.sumOfArrayNew(newArry);
console.log('Ouput::' + x);
var readonlyTuple = [10, 5];
console.log('Getting the sum of numbers with tuple');
x = cal.sumWithTuple(readonlyTuple);
console.log('Ouput::' + x);
function getPersons() {
    var persons = [
        { designation: "employee", name: "someName" },
        { designation: "employer", name: "otherName" }
    ];
    return persons;
}
console.log(getPersons());
var myGlobal = "This is global variable";
globalThis.myGlobal = 'This is global variable';
console.log("accessing global varibale:::::" + globalThis.myGlobal);
