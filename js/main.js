/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное целое число из переданного диапазона включительно
*/
function getRandomWhole(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

getRandomWhole(20, 35);

//как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему//
function getRandomWhole(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + max; //Максимум не включается, минимум включается
}

getRandomWhole(35, 20);

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
*/
function getRandomFraction(min, max, Digits = 1) {
  return Math.random() * (max - min) + min;
}

getRandomFraction(1.4, 3.2);

//как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему//
function getRandomFraction(min, max, Digits = 1) {
  return Math.random() * (max - min) + max;
}

getRandomFraction(3.2, 1.4);
