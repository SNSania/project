function delay(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, milliseconds);
    });
}
delay(1000)
    .then(function () {
    console.log('The delay is over');
})
    .catch(function (error) {
    console.error('Something went wrong:', error);
})
    .finally(function () {
    console.log('This is always executed');
});
