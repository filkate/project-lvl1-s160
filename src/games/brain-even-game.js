import { game } from '../type';

const rule = 'Answer "yes" if number even otherwise answer "no"\n';
const makeQuestion = () => Math.round(Math.random() * 100);
const isRight = num => ((num % 2 === 0) ? 'yes' : 'no');


const make = () => {
  const question = makeQuestion();
  const answer = isRight(question);
  return game(question, answer);
};

export { rule, make };
