interface Shape {
  getArea(): number;
  getPerimeter(): number;
  scale(factor: number): void;
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  scale(factor: number): void {
    this.radius *= factor;
  }
}

class Rectangle implements Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  
    scale(factor: number): void {
      this.width *= factor;
      this.height *= factor;
    }
  }

  class Triangle implements Shape {
    private a: number;
    private b: number;
    private c: number;
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getArea(): number {
      const s = (this.a + this.b + this.c) / 2;
      return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
  
    getPerimeter(): number {
      return this.a + this.b + this.c;
    }
  
    scale(factor: number): void {
      this.a *= factor;
      this.b *= factor;
      this.c *= factor;
    }
  }
  
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Triangle(3, 4, 5)
  ];
  
  function calculateTotalArea(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.getArea(), 0);
  }
  
  function calculateTotalPerimeter(shapes: Shape[]): number {
    return shapes.reduce((total, shape) => total + shape.getPerimeter(), 0);
  }
  
  const totalArea = calculateTotalArea(shapes);
  const totalPerimeter = calculateTotalPerimeter(shapes);
  
  console.log(`-----------------Завданна 2--------------------`);
  console.log(`Загальна площа: ${totalArea}`);
  console.log(`Загальний периметр: ${totalPerimeter}`);
  console.log(`-----------------------------------------------`);