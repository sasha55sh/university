abstract class Employee {
  protected name: string;
  protected age: number;
  protected salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.1;
  }

  pay(): void {
    console.log(`${this.name} отримав ${this.getAnnualBonus()} бонусу.`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  getAnnualBonus(): number {
    return this.salary * 0.2;
  }

  pay(): void {
    console.log(`${this.name} отримав ${this.getAnnualBonus()} бонусу.`);
  }
}

interface Payable {
  pay(): void;
}

const employees: Employee[] = [
  new Developer("Іван", 30, 50000),
  new Developer("Оксана", 28, 55000),
  new Manager("Анатолій", 45, 80000),
  new Manager("Марина", 40, 85000),
];

function calculateTotalAnnualBonuses(employees: Employee[]): number {
  return employees.reduce(
    (total, employee) => total + employee.getAnnualBonus(),
    0
  );
}

const totalAnnualBonuses = calculateTotalAnnualBonuses(employees);
console.log(`Загальна річна сума бонусів: ${totalAnnualBonuses}`);

employees.forEach((employee) => {
  if (employee instanceof Developer || employee instanceof Manager) {
    (employee as Payable).pay();
  }
});
