// destructuring = extract values form arrays and objects,
//                 then assign them to variable in a convenient way
//                 use [] to perform array destructuring
//                 use {} to perform ibject destructuring

// === SWAP THE VALUE OF TWO VARIABLES ===
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// === SWAP 2 ELEMENTS IN AN ARRAY ===
// const colours = ["red", "green", "blue", "white", "black"];

// [colours[0], colours[4]] = [colours[4], colours[0]];
// console.log(colours) // ["black", "green", "blue", "white", "red"]

// const [firstColor, secondColor, thirdColor, ...extraColors] = colours;

// console.log(firstColor); // "red"
// console.log(secondColor); // "green"
// console.log(thirdColor); // "blue"
// console.log(extraColors); // ["white", "black"]

// === ASSIGN ARRAY TO A VARIABLE ===
// const colours = ["red", "green", "blue", "white", "black"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colours;

// console.log(firstColor); // "red"
// console.log(secondColor); // "green"
// console.log(thirdColor); // "blue"
// console.log(extraColors); // ["white", "black"]

//  === EXTRACT VALUE FORM OBJECT ===
// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Fry Cook",
// };

// const person2 = {
//   firstName: "Patric",
//   lastName: "Star",
//   age: 34,
// };

// const { firstName, lastName, age, job = "jobless" } = person1; // "jobless" is the default value if the value is not available in the object

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// === DESTRUCTURING IN FUNCTION PARAMETERS ===

function displayMe({ firstName, lastName, age, job = "Unemployed" }) {
  // "Unemployed" is the default value
  console.log(`My name is ${firstName} ${lastName},`);
  console.log(`I am ${age} and working as ${job}`);
}

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patric",
  lastName: "Star",
  age: 34,
};

displayMe(person1); // My name is Spongebob Squarepants
// I am 30 and working as Fry Cook
