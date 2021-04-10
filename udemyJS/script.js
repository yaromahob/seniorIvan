let carName = "Ford";
let carYear = 2010;
let personYear = 1990;

function calculateAge(year) {
  let currentYear = 2018;
  let result = currentYear - year;
  return result;
}

function checkAndLogAge(year, name, compareTo) {
  if (calculateAge(year) < compareTo) {
    console.log("Возраст " + name + " меньше " + compareTo + " лет");
  } else {
    console.log("Возраст " + name + " больше " + compareTo + " лет");
  }
}

checkAndLogAge(carYear, "машины", 8);
checkAndLogAge(personYear, "человека", 30);

// let carColor = prompt("Какой цвет машины?");
// switch (carColor) {
//   case "green":
//     console.log("Цвет машины зеленый");
//     break;
//   case "yellow":
//     console.log("Цвет машины желтый");
//     break;
//   case "red":
//     console.log("Цвет машины красный");
//     break;
//   default:
//     console.log("Цвет машины не определен");
// }
