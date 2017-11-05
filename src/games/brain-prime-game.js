import play from '..';

const rule = 'Is this a prime number?';

const isPrime = (num) => {
  const iter = (number, divisor) => {
    if (divisor === number) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    const newDivisor = divisor + 1;
    return iter(number, newDivisor);
  };
  return iter(num, 2);
};


const step = () => {
  const question = Math.round(Math.random() * 100);
  const makeAnswer = num => (isPrime(num) ? 'yes' : 'no');
  const answer = makeAnswer(question);
  return { question, answer };
};

export default () => play(rule, step);
