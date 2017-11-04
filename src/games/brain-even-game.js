import { game } from '../type';

const rule = 'Answer "yes" if number even otherwise answer "no"';
const makeQuestion = () => Math.round(Math.random() * 100);
const isEven = num => num % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');

const make = () => {
  const question = makeQuestion();
  const answer = makeAnswer(question);
  return game(question, answer);
};

export { rule, make };
