function calculate({ num1, num2, operationCallback }: { num1: any; num2: any; operationCallback: any; }): void {
    const result = operationCallback(num1, num2);
    console.log("The result is: ", result);
}
function add(n1: any, n2: any) {
    return n1 + n2;
}
function subtract(n1: any, n2: any) {
    return n1 - n2;
}
function multiply(n1: any, n2: any) {
    return n1 * n2;
}
function divide(n1: any, n2: any) {
    if (n2 !== 0) {
        return n1 / n2;
    }
    else {
        return "Error: Cannot be divided by 0";
    }
}
calculate({ num1: 2, num2: 4, operationCallback: subtract });
export {};