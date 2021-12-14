// Object
// One of the JavaScript's data types
// a collection of realated data and/or funtionality.
// Nearly all object in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
print(name, age);

function print (person) {
    console.log(person.name);
    console.log(person.age)
}

const ellie = {name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;  // 가능하면 피해서 코딩 굉장히 효율이 안 좋음1.
console.log(ellie.hasJob); 

delete ellie.hasJob; // 가능하면 피해서 코딩 굉장히 효율이 안 좋음2.
console.log(ellie.hasJob);

// 2. Computed properties
// Key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name : 'bob', age : 2 };
const person2 = { name : 'steve', age : 3 };
const person3 = { name : 'dabe', age : 4 }; // 효율이 안 좋음
const person4 = new Person('ellie', 30); // 효율이 좋음
console.log(person4);

// 4. Constructor Function
function Person(name, age) {  // 이런식으로 함수를 만들어 줘서 코딩 해 줘야 편함
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in Operator: property existance check (key in obj)  키안에 오브젝트가 있는지 확인하는 법
console.log('name' in ellie); // ture
console.log('age' in ellie); // ture
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 전에 모든 로그가 지워짐
for (key in ellie) {  
    console.log(key); // ellie 안에 있는 모든 key 가 출력 됨
}   

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {  // 안 좋은 방법
    console.log(array[i]);
}

for (value of array) {  // 조금 더 쉬운 방법
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};   // 첫번째 방법
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);  // 두번째 방법 
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);