import {date} from './date.js';
import {form} from './form.js';
import {map} from './map.js';

const AUTHORS = ['avatar'];

const OFFERS = [
  'title',
  'address',
  'price',
  'type',
  'rooms',
  'guests',
  'checkin',
  'checkout',
  'features',
  'description',
  'photos',
];

const LOCATIONS = ['lat', 'lng'];

const SIMILAR_DATE_COUNT = 3;

const informationDate = () => ({
  authors: getRandomArrayElement(AUTHORS),
  offers: getRandomArrayElement(OFFERS),
  locations: getRandomArrayElement(LOCATIONS),
});

const similarDate = Array.from({ length: SIMILAR_DATE_COUNT }, informationDate);

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное целое число из переданного диапазона включительно
*/
const getRandomWhole = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

getRandomWhole(20, 35);

/*
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
*/
const getRandomFraction = (min, max) => Math.random() * (max - min) + min;

getRandomFraction(1.4, 3.2);
