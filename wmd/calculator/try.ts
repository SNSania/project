
function calculate({ num1, num2, operationCallback }: { num1: any; num2: any; operationCallback: any; }): void {
    const result = operationCallback(num1, num2);
    console.log("The result is: ", result);
    callback();
}
console.log("noting");
callback();

function callback() {
    throw new Error("Function not implemented.");
}
