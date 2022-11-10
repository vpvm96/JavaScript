// Ternary Operator
// Bad code
function getResult(score) {
  let result;
  if (score > 5) {
    result = "good";
  } else if (score <= 5) {
    result = "bad";
  }
  return result;
}

// Good code
function getResult(score) {
  return score > 5 ? "good" : "bad";
}

// Nulish coalescing operator
// Bad code
function printMessage(text) {
  const message = text;
  if (text == null || text == undefined) {
    message = "Nothing to display";
  }
  console.log(message);
}

//Good code
function printMessage(text) {
  const message = text ?? "Nothing to display";
  console.log(message);
}

// Defalut parameter is only for undefined
function printMessage(text = "Nothing to display") {
  console.log(text);
}

// Logical OR operator ||
function printMessage(text) {
  const message = text || "Nothing to display";
  console.log(message);
}

printMessage("Hello");
printMessage(undefined);
printMessage(null);
printMessage(0);
printMessage("");

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}

function fetchFromServer() {
  return "Hiya from laptop";
}

// Object Destructuring
const person = {
  name: "Julia",
  age: 20,
  phone: "01077777777",
};
// Bad code
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// Bad code
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// Good code
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// Spread Synctax - Object
const item = { type: "shirt", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// Bad code
item["Pirce"] = detail.price;

// Bad cod
const newObject = new Object();
newObject["type"] = itme.type;
newObject["size"] = itme.size;
newObject["price"] = detail.price;
newObject["made"] = detail.made;
newObject["gender"] = detail.gender;

// Bad code
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// Good code
const shirt0 = Object.assign(item, detail);

// Better code
const shirt = { ...item, ...detail, price: 40 };

// Spread Syntax - Array
let fruits = ["watermelon", "orange", "banana"];

// fruits.push('strawberry');
fruits = [...fruits, "strawberry"];

// fruits.unshift('grape');
fruits = ["grape", ...fruits];

const fruits = ["melon", "peach", "pineapple"];
let combined = fruits.concat(fruits2);
combined = [...fruits, "cherry", ...fruits2];

// Optional chaining
const bob = {
  name: "Julia",
  age: 20,
};
const anna = {
  name: "Julia",
  age: 20,
  job: {
    title: "Software Engineer",
  },
};

// Bad code
function displayJobTitle(person) {
  if (person.job && perosn.job.title) {
    console.log(person.job.title);
  }
}

// Good code
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// Good code
function displayJobTitle(person) {
  const title = person.job?.title ?? "no Job Yet";
  console.log(title);
}

// Template Literals (Templeate String)
const person = {
  name: "Julia",
  score: 4,
};

// Bad code
console.log("Hello" + person.name + ", your current score is:" + person.socre);

// Good code
console.log(`Hello${person.name}, Your current score is: ${person.score}`);

// Good code
const { name, socre } = person;
console.log(`Hello${name}, Your current score is: ${socre}`);

// Good code
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${socre}`);
}

// Looping
const items = [1, 2, 3, 4, 5, 6];

// Bad code
function getAllEvens(items) {
  return items.filter((num) => num % 2 === 0);
}

function multiplyByFour(items) {
  return items.map((num) => num * 4);
}

function sumArray(items) {
  items.reduce((a, b) => a + b, 0);
}

// Good code
const evens = item.filter((num) => num % 2 === 0);
const multiple = evnens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// Good code
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);

// Promise -> Async/await

// Bad code
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// Good code
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
