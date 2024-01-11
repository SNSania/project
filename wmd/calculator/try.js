function calculate(_a) {
    var num1 = _a.num1, num2 = _a.num2, operationCallback = _a.operationCallback;
    var result = operationCallback(num1, num2);
    console.log("The result is: ", result);
    callback();
}
console.log("noting");
callback();
function callback() {
    throw new Error("Function not implemented.");
}
