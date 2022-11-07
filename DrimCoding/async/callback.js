"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("2");
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous call back
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback hell example
class UserStorage {
  loginUser(id, password, onSucces, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSucces(id);
      } else {
        onError(new Error("Not found"));
      }
    }, 2000);
  }

  gerRoles(user, onSucces, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSucces({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRoles) => {
        alert(
          `Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
