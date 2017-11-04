import play from '..';

const rule = 'Balance the given number.';

const prepareNum = num =>
  String(num).split('').map(item => Number(item)).sort();

const isBalanced = (num) => {
  if (num[num.length - 1] - num[0] <= 1) {
    return true;
  }
  return false;
};

const balance = (num) => {
  if (isBalanced(num)) {
    return num.join('');
  }
  const len = num.length;
  const newNum = num.slice();
  newNum[len - 1] -= 1;
  newNum[0] += 1;
  return balance(newNum.sort());
};

const step = () => {
  const question = Math.round(Math.random() * 1000);

  const makeAnswer = () => {
    const arrNum = prepareNum(question);
    if (isBalanced(arrNum)) {
      return arrNum.join('');
    }
    return balance(arrNum);
  };
  const answer = makeAnswer();
  return { question, answer };
};

export default () => play(rule, step);
