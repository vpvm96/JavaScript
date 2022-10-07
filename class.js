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

/** 7. 정적 메소드와 정적 프로퍼티
 *  
 *  "prototype" 이 아닌 클래스 함수 자체에 메소드를 설정할 수도 있습니다. 이런 메소드를 (static) 메소드라고 부릅니다.
  */

// 1.
class User {
    static staticMethod() {
        alert(this === User)
    }
}

User.staticMethod() // true

// 2.
class User {}

User.staticMethod = () => {
    alert(this === User)
}

User.staticMethod() // true

// 정적 메소드는 어떤 특정한 객체가 아닌 클래스에 속한 함수를 구현하고자 할 때 주로 사용됩니다.

class Article {
    constructor (title, date) {
        this.title = title
        this.date = date
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date
    }
}

// 사용법

const articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare)

console.log(articles[0].title) // CSS

/** 여기서 Article.compare는 article(글)을 비교해주는 수단으로, 글 전체를 "위에서" 바로보며 비교를 수행합니다.
 *  Article.compare 이 글 하나의 메소드가 아닌 클래스의 메소드여야 하는 이유가 여기에 있습니다.
 * 
 * 이번에 살펴볼 예시는 "팩토리" 메소드를 구현한 코드입니다. 다양한 방법에 조건에 맞는 article 인스턴스를
 * 만들어야 한다는 가정을 해봅시다.
 * 
 * 1. 매개변수 (title, date 등)를 이용해 관련 정보가 담긴 article 생성
 * 2. 오늘 날짜를 기반으로 비어있는 article 생성
 * 3. 기타 등등
 * 
 * 첫 번째 방법은 생성자를 사용하여 구현할 수 있습니다.
 * 두 번째 방법은 클래스에 정적 메소드를 만들어 구현할 수 있습니다.
 */

class Article {
    constructor(title, date) {
        this.title = title
        this.date = date
    }

    static createTodays() {
        return new this("Today's digest", new Date())
    }
}

const article = Article.createTodays()

console.log(article.title) // Today's digest

// 정적 프로퍼티

class Article {
    static publisher = "Ilya kantor"
}

console.log(Article.publisher) // Ilya kantor

// 정적 프로퍼티와 메소드 상속

class Animal {
    static planet = "지구"

    constructor(name, speed) {
        this.name = name
        this.speed = speed
    }

    run(speed = 0) {
        this.speed += speed
        console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`)
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name}가 숨었습니다.`)
    }
}

const rabbits = [
    new Rabbit("흰 토끼", 10),
    new Rabbit("검은 토끼", 5)
]

rabbits.sort(Rabbit.compare)

rabbits[0].run() // 검은 토끼가 속도 5로 달립니다.

console.log(Rabbit.planet) // 지구

/** 이제 Rabbit.compare를 호출하면 Animal.compare가 호출됩니다.
 *  extends 키워드는 Rabbit의 [[prototype]]이 Animal 을 참조하도록 해줍니다.
 * 따라서 Rabbit extends Animal은 두 개의 [[prototype]] 참조를 만들어 냅니다.
 * 
 * 1. 함수 Rabbit 은 프로토타입을 통해 함수 Animal을 상속받습니다.
 * 2. Rabbit.prototype 은 프로토타입을 통해 Animal.prototype을 상속받습니다.
 * 
 * 일반 메소드 상속과 정적 메소드 상속이 가능합니다.
 */

class Animal {}
class Rabbit extends Animal {}

// 정적 메소드
console.log(Rabbit.__proto__ === Animal) // true

// 일반 메소드
console.log(Rabbit.prototype.__proto__ === Animal.prototype) // true

