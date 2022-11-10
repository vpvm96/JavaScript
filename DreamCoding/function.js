// Function
// - fundamental building block(기본 구성 요소) in the program
// - subprogram can be used multiple times (여러번 재사용 가능)
// - performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) { body... return; }
// one function === one thing+
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, creatPoint
// function is object in JS

function printHello () {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');  

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unKnown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...arags) {
    for(let i = 0; i < arags.lenth; i++) {
        console.log(arags[i]);
    } // 첫번째 방법

    for(const arg of args) {
        console.log(arg);
    } // 두번째 방법
    
    arags.forEach((arg) => console.log(arg)); // 세번째 방법
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope  (밖에서는 안이 보이지 않고 안에서는 밖을 볼 수 있다.)
let globalMessage = 'global'; // global variable // 글로벌 변수
function printMessage() {
    console.log(message); // local variable // 지역 변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message); // 부모변수는 자식변수에서 출력가능
        let childMesaage = 'hello';
    }
    //console.log(childMesaage) //Error 자식변수는 부모변수에서 출력불가
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}


// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // annonymous function
    console.log(`print`);
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// annonymous function
const printYes = function () {
    console.log('Yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print () {
    console.log('no!');
    print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};

const simplePrint = () => console.log('simplePrint!'); // Arrow function 방법 1
const add = (a, b) => a + b;  // Arrow function 방법 2
const simpleMultiply = (a, b) => { // Arrow function 방법 3 <- 이거를 자주 사용
    //do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression (거의 사용하지 않음)
(function hello() {
    console.log('IIFE');
})();


// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) { 
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkown command');
    }
}
console.log(calculate('add', 2, 3));