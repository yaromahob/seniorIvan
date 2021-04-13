// домашка :D
// [Переслано от Ivan]
// афвыфщорфывщшрфывлопфвыаааффврфрмфвааа
let str = "афвыфщорфывщшрфывлопфвыаааффврфрмфвааа";
let newStr = str.split("а");
console.log(newStr);

let newArr = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "а") continue;
  newArr += str[i];
}
console.log(newArr);
