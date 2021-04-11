//Массивы
let cars = ["Ford", "Mazda", "Kia", "BMW"];

console.log(cars);
console.log(cars[1]);

console.log(cars.length);
cars.push("Audi"); //добавить элемент в конец
console.log(cars);
let lastElement = cars.pop(); //удаляет и возращает последний элемент

console.log(cars, lastElement);
//
let firstElement = cars.shift(); //удаляет и возращает первый элемент

console.log(firstElement, cars, lastElement);
cars.unshift(lastElement); //добавляет в начало
console.log(cars);
console.log(cars.indexOf("Kia")); //Важен регистр букв!!!
let index = cars.indexOf("Kia");
let kia = cars[index];
console.log(kia);
