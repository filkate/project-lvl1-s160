import { game } from '../type';

const rule = 'What is the result of the expression?';

let result;
let numOper = 0;

const makeQuestion = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  switch (numOper) {
    case 0: result = num1 + num2; numOper += 1; return `${num1} + ${num2}`;
    case 1: result = num1 - num2; numOper += 1; return `${num1} - ${num2}`;
    case 2: result = num1 * num2; numOper += 1; return `${num1} * ${num2}`;
    default: result = num1 + num2; numOper += 1; return `${num1} + ${num2}`;
  }
};
const make = () => {
  const answer = num => num.toString().trim();
  const question = makeQuestion();
  return game(question, answer(result));
};

export { make, rule };
