import play from '..';

const rule = 'What is the result of the expression?';


const step = () => {
  let result;

  const makeQuestion = () => {
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const numOper = Math.round(Math.random() * 3);
    switch (numOper) {
      case 0: result = num1 + num2; return `${num1} + ${num2}`;
      case 1: result = num1 - num2; return `${num1} - ${num2}`;
      case 2: result = num1 * num2; return `${num1} * ${num2}`;
      default: result = num1 + num2; return `${num1} + ${num2}`;
    }
  };

  const question = makeQuestion();
  const answer = result.toString().trim();
  return { question, answer };
};

export default () => play(rule, step);
