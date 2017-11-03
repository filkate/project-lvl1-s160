import readlineSync from 'readline-sync';
import { game } from '../type';

const GAME_RULE = 'Answer "yes" if number even otherwise answer "no"\n';
const makeQuestion = () => Math.round(Math.random() * 100);
const isRight = num => ((num % 2 === 0) ? 'yes' : 'no');

function gameIteration() {
  const question = makeQuestion();
  const answer = readlineSync.question(`Question: ${question}\nYour answer? `);
  const rightAnswer = isRight(question);
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  const wrong = `${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`;
  console.log(wrong);
  return false;
}


const evenGame = game(GAME_RULE, gameIteration);


export default evenGame;
