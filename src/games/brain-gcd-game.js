import { game } from '../type';

const rule = 'Find the greatest common divisor of given numbers.\n';
let num1;
let num2;
const makeQuestion = () => {
  num1 = Math.round(Math.random() * 100);
  num2 = Math.round(Math.random() * 100);
  return `${num1} ${num2}`;
};

const gcd = (a, b) => {
  if (a === 0) {
    return Math.abs(b);
  }
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};


const make = () => {
  const question = makeQuestion();
  const answer = gcd(num1, num2).toString();
  return game(question, answer);
};

export { rule, make };
