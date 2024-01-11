// // const a = "sania"
// // console.log(a);
// // const b = "nawaz"
// // console.log(b);
function greet(name, callback) {
    console.log("hello, ".concat(name));
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}
function sayHello() {
    console.log("Hello!");
}
greet('alic', function () { return sayGoodbye(); });
greet('alic', function () { return sayHello(); });
