function myfunc(firstName, lastname) {
    if (lastname) {
        console.log(firstName + "" + lastname);
    }
    else {
        console.log(firstName);
    }
    myfunc("Sania");
    myfunc("Nawaz");
}
export {};
