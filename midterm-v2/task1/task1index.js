// თქვენი კოდი აქ
class Shape {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  
    getInfo() {
      return `This is a ${this.name} and its color is ${this.color}`;
    }
  }
  

  class Circle extends Shape {
    constructor(name, color, radius) {
      super(name, color); 
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2); 
    }
  
    getInfo() {
      return `This is a ${this.name} and its color is ${this.color}. It has a radius of ${this.radius}`;
    }
  }
  
  class Rectangle extends Shape{
    construction(name, color, width, height){
        super(name, color);
        this.width = width;
        this.height = height;
    }
  }
    
  getArea() {
      return this.width * this.height; 
    }
  
    getInfo() {
      return `This is a ${this.name} and its color is ${this.color}. It has width ${this.width} and height ${this.height}`;
    }

  
  // ტესტის შემთხვევები
  const circle = new Circle("circle", "red", 5);
  const rectangle = new Rectangle("rectangle", "blue", 4, 6);
  
  console.log(circle.getInfo());
  // უნდა დაბეჭდოს: "This is a circle and its color is red. It has a radius of 5"
  
  console.log(rectangle.getInfo());
  // უნდა დაბეჭდოს: "This is a rectangle and its color is blue. It has width 4 and height 6"
  
  console.log(circle.getArea());
  // უნდა დაბეჭდოს: 78.53981633974483 (π * 5^2)
  
  console.log(rectangle.getArea());
  // უნდა დაბეჭდოს: 24 (4 * 6)



