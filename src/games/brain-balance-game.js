import { game } from '../type';

const rule = 'Balance the given number.';
let arrNum;

const makeQuestion = () => Math.round(Math.random() * 1000);
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
  const newNum = num;
  const diff = num[len - 1] - num[0];
  const bal = Math.floor(diff / 2);
  newNum[len - 1] -= bal;
  newNum[0] += bal;
  return balance(newNum.sort());
};

const make = () => {
  let answer = '';
  const question = makeQuestion();
  arrNum = prepareNum(question);
  if (isBalanced(arrNum)) {
    answer = arrNum.join('');
  } else {
    answer = balance(arrNum);
  }
  return game(question, answer);
};

export { make, rule };