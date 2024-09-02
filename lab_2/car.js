var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(mark, model, year) {
        this.mark = mark;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, year, fuelType) {
        var _this = _super.call(this, "Toyota", model, year) || this;
        _this.fuelType = fuelType;
        return _this;
    }
    Toyota.prototype.describe = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.mark, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.getYear(), ", \u0422\u0438\u043F \u043F\u0430\u043B\u0438\u0432\u0430: ").concat(this.fuelType));
    };
    return Toyota;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, year, engineType) {
        var _this = _super.call(this, "BMW", model, year) || this;
        _this.engineType = engineType;
        return _this;
    }
    BMW.prototype.describe = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.mark, " \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this.model, ", \u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.getYear(), ", \u0422\u0438\u043F \u043C\u043E\u0442\u043E\u0440\u0443: ").concat(this.engineType));
    };
    return BMW;
}(Car));
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(model, year, transmissionType) {
        var _this = _super.call(this, "Ford", model, year) || this;
        _this.transmissionType = transmissionType;
        return _this;
    }
    Ford.prototype.describe = function () {
        console.log("\u041C\u0430\u0440\u043A\u0430: ".concat(this.mark, ", \u041C\u0430\u0440\u043A\u0430: ").concat(this.model, ", \u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443: ").concat(this.getYear(), ", \u0422\u0438\u043F \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456: ").concat(this.transmissionType));
    };
    return Ford;
}(Car));
var toyotaCamry = new Toyota("Camry", 2020, "Gasoline");
var toyotaCorolla = new Toyota("Corolla", 2022, "Hybrid");
var bmwX5 = new BMW("X5", 2021, "V6");
var bmwM3 = new BMW("M3", 2023, "Inline-6");
var fordMustang = new Ford("Mustang", 2022, "Ручна");
var fordF150 = new Ford("F150", 2023, "Автомат");
toyotaCamry.describe();
toyotaCorolla.describe();
bmwX5.describe();
bmwM3.describe();
fordMustang.describe();
fordF150.describe();
console.log("-------------------------------------------------");
