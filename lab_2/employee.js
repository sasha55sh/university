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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.1;
    };
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 ").concat(this.getAnnualBonus(), " \u0431\u043E\u043D\u0443\u0441\u0443."));
    };
    return Developer;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.2;
    };
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " \u043E\u0442\u0440\u0438\u043C\u0430\u0432 ").concat(this.getAnnualBonus(), " \u0431\u043E\u043D\u0443\u0441\u0443."));
    };
    return Manager;
}(Employee));
var employees = [
    new Developer("Іван", 30, 50000),
    new Developer("Оксана", 28, 55000),
    new Manager("Анатолій", 45, 80000),
    new Manager("Марина", 40, 85000),
];
function calculateTotalAnnualBonuses(employees) {
    return employees.reduce(function (total, employee) { return total + employee.getAnnualBonus(); }, 0);
}
var totalAnnualBonuses = calculateTotalAnnualBonuses(employees);
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0440\u0456\u0447\u043D\u0430 \u0441\u0443\u043C\u0430 \u0431\u043E\u043D\u0443\u0441\u0456\u0432: ".concat(totalAnnualBonuses));
employees.forEach(function (employee) {
    if (employee instanceof Developer || employee instanceof Manager) {
        employee.pay();
    }
});
