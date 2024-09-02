interface Animal {
  name: string;
  age: number;

  move(): void;

  habitat?: string;
  has4Legs?: boolean;
  variety?: string;
}

class Cat implements Animal {
  name: string;
  age: number;
  habitat?: string;
  has4Legs?: boolean;

  constructor(name: string, age: number, habitat?: string, has4Legs?: boolean) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
    this.has4Legs = has4Legs;
  }

  move(): void {
    console.log(`${this.name} пересувається на чотирьох лапах`);
  }
}

class Fish implements Animal {
  name: string;
  age: number;
  habitat?: string;

  constructor(name: string, age: number, habitat?: string) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
  }

  move(): void {
    console.log(`${this.name} плаває за допомогою плавника`);
  }
}

class Bird implements Animal {
  name: string;
  age: number;
  habitat?: string;
  has4Legs?: boolean;
  variety?: string;

  constructor(name: string, age: number, habitat?: string, has4Legs?: boolean, variety?: string, ) {
    this.name = name;
    this.age = age;
    this.habitat = habitat;
    this.has4Legs = has4Legs;
    this.variety = variety;
  }

  move(): void {
    console.log(`${this.name} літає`);
  }
}

console.log("---------------------Завдання 1 -----------------------------");

const newCat = new Cat('Мурчик', 5, 'Будинок', true);
console.log("Ім'я: " + newCat.name + ", кількість років: " + newCat.age + ",місце проживання: " + newCat.habitat + ", має 4 лапи? " + newCat.has4Legs);
newCat.move();

const newBird = new Bird('Тоша', 2, 'Дерево', false, "папуга");
console.log("Ім'я: " + newBird.name + ", різновид: " + newBird.variety +  ", кількість років: " + newBird.age + ",місце проживання: " + newBird.habitat + ", має 4 лапи? " + newBird.has4Legs);
newBird.move()

const newFish = new Fish('Немо', 1, 'Океан');
console.log("Ім'я: " + newFish.name + ", кількість років: " + newFish.age + ",місце проживання: " + newFish.habitat);
newFish.move();

console.log("---------------------------------------------------------------");