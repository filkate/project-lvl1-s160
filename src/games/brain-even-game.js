import play from '..';

const rule = 'Answer "yes" if number even otherwise answer "no"';

const step = () => {
  const isEven = num => num % 2 === 0;
  const makeAnswer = num => (isEven(num) ? 'yes' : 'no');
  const question = Math.round(Math.random() * 100);
  const answer = makeAnswer(question);
  return { question, answer };
};

export default () => play(rule, step);
