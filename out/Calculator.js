"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    // old way
    Calculator.prototype.sumOfArray = function (numbs) {
        var x = numbs.reduce(function (a, b) { return a + b; });
        return x;
    };
    //new way
    Calculator.prototype.sumOfArrayNew = function (numbs) {
        var x = numbs.reduce(function (a, b) { return a + b; });
        return x;
    };
    // tuples
    Calculator.prototype.sumWithTuple = function (numbs) {
        var x = numbs[0] + numbs[1];
        return x;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
