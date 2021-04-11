console.log(42);
console.log(-42);
console.log(1.5);
console.log(-8 / 3);
console.log(0xab);
console.log(2e3);
console.log(NaN);
console.log(typeof NaN);
console.log(123 / 0);
let fortyTwo = 42;
console.log(fortyTwo.toString());
let delta = 8 / 3;
console.log(+delta.toFixed(1) + 4); //оставляет нужное колво знаков после запятой
console.log(parseFloat(delta.toFixed(2))); //парсит число и выдает результат с учетой десятичных частей
console.log(parseInt(delta.toFixed(2))); //работает только с целыми числами
console.log(isNaN(NaN));
console.log(isNaN(44)); //проверка валидности числа
console.log(isFinite(1 / 0));
console.log(isFinite(999999999999));
