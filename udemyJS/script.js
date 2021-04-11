let str1 = "hello world";
let str2 = "hello world 2";

let personName = "Виктор";

let message = 'Человека зовут "' + personName + '"';
let message2 = "Человека зовут '" + personName + "'";

console.log(message2);

let newMessage = "Hello World!!!";

console.log(newMessage);
console.log(newMessage.length); //считает кол-во символов в "объекте"
console.log(newMessage.toUpperCase()); //присваивает всей строке верхний регистр
console.log(newMessage.toLocaleLowerCase()); //присваивает всей строке нижний регистр
console.log(newMessage.charAt(1)); //вызывает символ строки(указывавется в скобках)
console.log(newMessage.indexOf("World")); //поиск позиции слова в строке(указать слово в скобках)
console.log(newMessage.substr(1, 4));
console.log(newMessage.substr(newMessage.indexOf("World"), 5));
console.log(newMessage.substring(1, 3));
