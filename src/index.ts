interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John",
  age: 30,
};

console.log(`Hello ${user.name} you are ${user.age} years old`);