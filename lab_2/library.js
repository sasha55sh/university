var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isBorrowed = false;
    }
    Book.prototype.borrow = function () {
        this.isBorrowed = true;
        console.log("\u041A\u043D\u0438\u0433\u0430 \"".concat(this.title, "\" \u0431\u0443\u043B\u0430 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0430."));
    };
    Book.prototype.isAvailable = function () {
        return !this.isBorrowed;
    };
    return Book;
}());
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
        this.isBorrowed = false;
    }
    Magazine.prototype.borrow = function () {
        this.isBorrowed = true;
        console.log("\u0416\u0443\u0440\u043D\u0430\u043B \"".concat(this.title, "\" \u0431\u0443\u0432 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u0439."));
    };
    Magazine.prototype.isAvailable = function () {
        return !this.isBorrowed;
    };
    return Magazine;
}());
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.title = title;
        this.author = author;
        this.duration = duration;
        this.isBorrowed = false;
    }
    DVD.prototype.borrow = function () {
        this.isBorrowed = true;
        console.log("DVD \"".concat(this.title, "\" \u0431\u0443\u043B\u043E \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0435."));
    };
    DVD.prototype.isAvailable = function () {
        return !this.isBorrowed;
    };
    return DVD;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    // Метод для додавання елемента до бібліотеки
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(item.title, "\" \u0434\u043E\u0434\u0430\u043D\u043E \u0434\u043E \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0438."));
    };
    // Метод для пошуку елемента за назвою
    Library.prototype.findItemByName = function (name) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.title === name) {
                return item;
            }
        }
        return undefined;
    };
    // Метод для виведення списку доступних елементів
    Library.prototype.listAvailableItems = function () {
        var availableItems = this.items.filter(function (item) {
            if (item instanceof Book)
                return item.isAvailable();
            if (item instanceof Magazine)
                return item.isAvailable();
            if (item instanceof DVD)
                return item.isAvailable();
            return false;
        });
        if (availableItems.length === 0) {
            console.log("Немає доступних елементів.");
        }
        else {
            console.log("Доступні елементи бібліотеки:");
            availableItems.forEach(function (item) {
                console.log("\u041D\u0430\u0437\u0432\u0430: ".concat(item.title, ", \u0410\u0432\u0442\u043E\u0440: ").concat(item.author));
            });
        }
    };
    return Library;
}());
var book1 = new Book("Чарлі і шоколадна фабрика", "Чарльз Дікенс", 1225);
var magazine1 = new Magazine("Наука і життя", "Редакція", 5);
var dvd1 = new DVD("Інтерстеллар", "Крістофер Нолан", 169);
var library = new Library();
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);
var searchTitle = "Чарлі і шоколадна фабрика";
var foundItem = library.findItemByName(searchTitle);
if (foundItem) {
    console.log("\u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0435\u043B\u0435\u043C\u0435\u043D\u0442: \u041D\u0430\u0437\u0432\u0430 - ".concat(foundItem.title, ", \u0410\u0432\u0442\u043E\u0440 - ").concat(foundItem.author));
}
else {
    console.log("\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0437 \u043D\u0430\u0437\u0432\u043E\u044E \"".concat(searchTitle, "\" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E."));
}
library.listAvailableItems();
book1.borrow();
magazine1.borrow();
library.listAvailableItems();
