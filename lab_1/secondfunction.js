function makeIceCream() {
  var sum = 0;
  var addMore;
  var chooseCup = prompt(
    "Оберіть розмір стаканчика - маленький(10 грн) чи великий (25 грн)"
  );
  if (chooseCup == "маленький" || chooseCup == "10" || chooseCup == "10 грн") {
    sum += 10;
    console.log("Замовлення: стаканчик 10грн");
  } else if (
    chooseCup == "великий" ||
    chooseCup == "25" ||
    chooseCup == "25 грн"
  ) {
    sum += 25;
    console.log("Замовлення: стаканчик 25грн");
  } else {
    alert("Введіть коректне значення!");
  }
  do {
    var addTopings = prompt("Оберіть начинки: шоколад, карамель, ягоди");
    if (addTopings == "шоколад") {
      sum += 5;
      console.log("Начинка шоколад");
    } else if (addTopings == "карамель") {
      sum += 6;
      console.log("Начинка карамель");
    } else if (addTopings == "ягоди") {
      sum += 10;
      console.log("Начинка ягоди");
    } else if (addTopings !== null) {
      console.log("Oберіть шоколад, карамель або ягоди");
    }
    addMore = prompt("Додати ще? (так/ні)");
  } while (addMore == "так");
  var addMarshmello = prompt("Посипати маршмелоу (так/ні)");
  if (addMarshmello == "так") {
    sum += 5;
    console.log("Посипали маршмелоу");
    console.log("Дякуємо за замовлення. Сума до плати " + sum);
  } else if (addMarshmello == "ні") {
    console.log("Дякуємо за замовлення. Сума до плати " + sum);
  }
}
makeIceCream();
