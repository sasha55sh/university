abstract class Car {
  protected mark: string;
  protected model: string;
  private year: number;

  constructor(mark: string, model: string, year: number) {
    this.mark = mark;
    this.model = model;
    this.year = year;
  }

  abstract describe(): void;

  getYear(): number {
    return this.year;
  }
}

class Toyota extends Car {
  private fuelType: string;

  constructor(model: string, year: number, fuelType: string) {
    super("Toyota", model, year);
    this.fuelType = fuelType;
  }

  describe(): void {
    console.log(
      `Марка: ${this.mark}, Модель: ${
        this.model
      }, Рік випуску: ${this.getYear()}, Тип палива: ${this.fuelType}`
    );
  }
}

class BMW extends Car {
  private engineType: string;

  constructor(model: string, year: number, engineType: string) {
    super("BMW", model, year);
    this.engineType = engineType;
  }

  describe(): void {
    console.log(
      `Марка: ${this.mark} Модель: ${
        this.model
      }, Рік випуску: ${this.getYear()}, Тип мотору: ${this.engineType}`
    );
  }
}

class Ford extends Car {
  private transmissionType: string;

  constructor(model: string, year: number, transmissionType: string) {
    super("Ford", model, year);
    this.transmissionType = transmissionType;
  }

  describe(): void {
    console.log(
      `Марка: ${this.mark}, Марка: ${
        this.model
      }, Рік випуску: ${this.getYear()}, Тип коробки передачі: ${
        this.transmissionType
      }`
    );
  }
}

const toyotaCamry = new Toyota("Camry", 2020, "Gasoline");
const toyotaCorolla = new Toyota("Corolla", 2022, "Hybrid");

const bmwX5 = new BMW("X5", 2021, "V6");
const bmwM3 = new BMW("M3", 2023, "Inline-6");

const fordMustang = new Ford("Mustang", 2022, "Ручна");
const fordF150 = new Ford("F150", 2023, "Автомат");

toyotaCamry.describe();
toyotaCorolla.describe();
bmwX5.describe();
bmwM3.describe();
fordMustang.describe();
fordF150.describe();
console.log("-------------------------------------------------")