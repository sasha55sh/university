function userInput(input, defaultNumber) {
  if (defaultNumber === void 0) {
    defaultNumber = 2;
  }
  if (typeof input === "string") {
    console.log(defaultNumber);
  } else if (typeof input === "number") {
    console.log(input);
  }
}
var value = prompt("Введіть значення: ");
if (value != null) {
  var numInput = Number(value);
  if (!isNaN(numInput)) {
    userInput(numInput);
  } else {
    userInput(value);
  }
}
