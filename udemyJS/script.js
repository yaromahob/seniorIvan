let person = {
  name: "Max",
  age: 26,
  car: {
    model: "Ford",
  },
  job: "Frontend",
  friends: ["Elena", "Igor"],
};
let str = JSON.stringify(person);

console.log(str);
console.log(JSON.parse(str));
