var Cat = /** @class */ (function () {
    function Cat(name, age, habitat, has4Legs) {
        this.name = name;
        this.age = age;
        this.habitat = habitat;
        this.has4Legs = has4Legs;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0447\u043E\u0442\u0438\u0440\u044C\u043E\u0445 \u043B\u0430\u043F\u0430\u0445"));
    };
    return Cat;
}());
var Fish = /** @class */ (function () {
    function Fish(name, age, habitat) {
        this.name = name;
        this.age = age;
        this.habitat = habitat;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043F\u043B\u0430\u0432\u043D\u0438\u043A\u0430"));
    };
    return Fish;
}());
var Bird = /** @class */ (function () {
    function Bird(name, age, habitat, has4Legs, variety) {
        this.name = name;
        this.age = age;
        this.habitat = habitat;
        this.has4Legs = has4Legs;
        this.variety = variety;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454"));
    };
    return Bird;
}());
console.log("---------------------Завдання 1 -----------------------------");
var newCat = new Cat('Мурчик', 5, 'Будинок', true);
console.log("Ім'я: " + newCat.name + ", кількість років: " + newCat.age + ",місце проживання: " + newCat.habitat + ", має 4 лапи? " + newCat.has4Legs);
newCat.move();
var newBird = new Bird('Тоша', 2, 'Дерево', false, "папуга");
console.log("Ім'я: " + newBird.name + ", різновид: " + newBird.variety + ", кількість років: " + newBird.age + ",місце проживання: " + newBird.habitat + ", має 4 лапи? " + newBird.has4Legs);
newBird.move();
var newFish = new Fish('Немо', 1, 'Океан');
console.log("Ім'я: " + newFish.name + ", кількість років: " + newFish.age + ",місце проживання: " + newFish.habitat);
newFish.move();
console.log("---------------------------------------------------------------");
