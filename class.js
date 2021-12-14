'use strict';
// Object-oriendted programming 
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speck() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person(`ellie`, 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speck();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age() {
        this.age = vlaue < 0 ? 0 : value;
    }

}

const user1 = new User('steve', 'job', -1);
console.log(user1, age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publicsher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublicsher() {
        console.log(Article.publicsher);
    }

}

// 5. Inheritance
// a way for one class to extend another class.
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends shape {}
class Triangle extends shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());

// 6. class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);