function myCallBack(text) {
    console.log("Print my call back text " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("to recall", myCallBack);
