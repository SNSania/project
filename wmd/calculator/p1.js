"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(_a) {
    var num1 = _a.num1, num2 = _a.num2, operationCallback = _a.operationCallback;
    var result = operationCallback(num1, num2);
    console.log("The result is: ", result);
}
function add(n1, n2) {
    return n1 + n2;
}
function subtract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    if (n2 !== 0) {
        return n1 / n2;
    }
    else {
        return "Error: Cannot be divided by 0";
    }
}
calculate({ num1: 2, num2: 4, operationCallback: subtract });
