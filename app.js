let programmingLanguage = "Nodejs";
let version = "22.04";

// declare a function to display a greeting message
function greet(user) {
  return `Hello, ${user}`;
}

function add(a, b) {
  return a + b;
}

// console.log(greet(name));
// console.log(greet("Developer"));
// console.log(add(5, 10));

let user = {
  name: "Alice",
  age: 25,
  greet: function () {
    console.log(`Hi i am, ${this.name}`);
  },
};

// user.greet();

const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  //   console.log(color);
});

const lengths = colors.map((color) => color.length);
// console.log(lengths);

// Asynchronous JavaScript

// 1. Callbacks (traditional)
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data fetched using Callback");
  }, 1000);
}

// 2. Promises (ES6+)
const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched using Promise");
    }, 1000);
  });
};

// 3. Async/Await (ES8+)
async function getDataAsync() {
  const result = await fetchDataPromise();
  console.log(result);
}

// getDataAsync();

// destructuring & template literals
const { name } = user;
console.log(`User name is: ${name}`);
