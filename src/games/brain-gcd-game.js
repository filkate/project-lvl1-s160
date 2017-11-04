import play from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0) {
    return Math.abs(b);
  }
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const step = () => {
  let num1;
  let num2;

  const makeQuestion = () => {
    num1 = Math.round(Math.random() * 100);
    num2 = Math.round(Math.random() * 100);
    return `${num1} ${num2}`;
  };

  const question = makeQuestion();
  const answer = gcd(num1, num2).toString();

  return { question, answer };
};

export default () => play(rule, step);
