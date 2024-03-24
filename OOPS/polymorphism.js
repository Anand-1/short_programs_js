class Animal {
  makeSound() {
    console.log("Some generic Sound !");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof ! Woof ");
  }
}

const newDog = new Dog();
console.log(newDog.makeSound());

// Ad-hoc Ploymorphism
function calculateArea(shape, arg1, arg2) {
  if (shape === "rectangle") {
    return arg1 * arg2;
  } else if (shape === "circle") {
    return Math.PI * Math.pow(arg1, 2);
  } else {
    throw new Error("Unsupported Shape !");
  }
}

console.log(calculateArea("rectangle", 2, 3));
console.log(calculateArea("circle", 2));
// console.log(calculateArea("anand", 2));

// Parametric Polymorphism

function getLength(input) {
  return input.length;
}

console.log(getLength([, 1, 2, 2]));
console.log(getLength("anand"));

//Polymorphism in Functional Programming:
// Higher-order function to perform an operation on two numbers
function operate(num1, num2, operation) {
  return operation(num1, num2);
}

// Functions representing different operations
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(operate(3, 4, add)); // Outputs: 7
console.log(operate(3, 4, multiply)); // Outputs: 12
