function userInput(input: string | number, defaultNumber: number = 2): void {
    if (typeof input === 'string') {
        console.log(defaultNumber);
    } else if (typeof input === 'number') {
        console.log(input);
    }
}

let value = prompt('Введіть значення: ');

if (value != null) {
    const numInput = Number(value);
    if (!isNaN(numInput)) {
        userInput(numInput);
    } else {
        userInput(value);
    }
}
