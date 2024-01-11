function myfunc (firstName: string, lastname?: string){
    if (lastname) {
        console.log(firstName + "" + lastname);
    } else {
        console.log(firstName);
    }
    myfunc("Sania");
myfunc("Nawaz");
    }
