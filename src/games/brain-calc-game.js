import readlineSync from 'readline-sync';
import { game } from '../type';

const GAME_RULE = 'What is the result of the expression?"\n';

let rightAnswer;
let numOper = 0;

const makeQuestion = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  switch (numOper) {
    case 0: rightAnswer = num1 + num2; numOper += 1; return `${num1} + ${num2}`;
    case 1: rightAnswer = num1 - num2; numOper += 1; return `${num1} - ${num2}`;
    case 2: rightAnswer = num1 * num2; numOper += 1; return `${num1} * ${num2}`;
    default: rightAnswer = num1 + num2; numOper += 1; return `${num1} + ${num2}`;
  }
};


function gameIteration() {
  const question = makeQuestion();
  const answer = readlineSync.question(`Question: ${question}\nYour answer? `);
  if (answer.trim() === rightAnswer.toString().trim()) {
    console.log('Correct!');
    return true;
  }
  const wrong = `${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`;
  console.log(wrong);
  return false;
}


const calcGame = game(GAME_RULE, gameIteration);


export default calcGame;
