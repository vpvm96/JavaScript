'use strict';

// Array

// 1. Declaration
const arr1 = new Array();  // 첫 번째 방법
const arr2 = [1, 2];  // 두 번째 방법 (더 흔히 쓰임)

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);  // 인덱스의 길이 'length' 를 사용
console.log(fruits[0]);  // 인덱스의 첫 번째를 나타냄 항상 0 부터 시작
console.log(fruits[1]);  // 인덱스의 두 번째를 나타냄
console.log(fruits[fruits.length -1]);  // [fruits.length -1]를 사용하면 맨 마지막 인덱스 값을 가져옴.

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end   뒤에 추가하는 함수
fruits.push('strawbarry', 'peach');
console.log(fruits);

// pop: remove an item from the end  뒤부터 삭제하는 함수
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging  앞에부터 추가하는 함수
fruits.unshift('strawbarry', 'peach');
console.log(fruits);

// shift: remove an item from the benigging 앞부터 삭제하는 함수
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// shift, unshift 는 굉장히 느림 그래서 pop, push 를 사용해서 짜는것이 중요!
// splice: remove an item by index position  지정된 자리에서 삭제 하는것이 가능
fruits.push('strawbarry', 'peach', 'remon');
console.log(fruits);
fruits.splice(1, 1);  // 지정된 인덱스 부터 어디까지 자를지 지정해 주지 않으면 전부 삭제함
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon'); // 지정된 자리에 삭제한후 그 자리에 더 추가해 줄 수 있음
console.log(fruits);

// combine two arrays ("concat") 을 사용하여 뒤에 붙여 줄 수 있음
const fruits2 = ['pare', 'coconat'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits); 

// 5. Searching
// find the index 
// indexOf: 몇 번째 인덱스에 있는지 찾을 수 있음 
console.clear;
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconat')); // 없을경우 -1 

// includes: 배열에 있는지 없는지 ture of false 로 출력하는 함수
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconat')); // 없을경우 false 

// lastIndexOf: 중복된 것이 있는 경우 제일 마지막에 있는 인덱스의 값을 출력함
console.clear();
fruits.push('apple'); // 중복된 사과가 있을 경우
console.log(fruits);
console.log(fruits.indexOf('apple')); // 맨 처음 발견된 중복된 인덱스 값을 출력
console.log(fruits.lastIndexOf('apple')); // 맨 마지막에 발견된 중복된 인덱스 값을 출력


