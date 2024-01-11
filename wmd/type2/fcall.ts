
type Callback = {
    (): void;
    name: string;
};

function greet(name: string, callback: Callback): void {
    console.log(`hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

function sayHello() {
    console.log("Hello!");
}

greet('alic', () => sayGoodbye());
greet('alic', () => sayHello());
