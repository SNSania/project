function myCallBack(text: string) {
    console.log("Print my call back text " + text);
}

function callingFunction(initialText: string, callback: (text: string) => void)
{
    callback(initialText);
}

callingFunction("to recall", myCallBack);