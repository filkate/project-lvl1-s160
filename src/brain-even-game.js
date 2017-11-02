import readlineSync from 'readline-sync';

const GAME_RULE = 'Answer "yes" if number even otherwise answer "no"\n';
const STEPS_COUNT = 3;
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

function game(name) {
  console.log(GAME_RULE);
  let i;
  for (i = 0; i < STEPS_COUNT; i += 1) {
    if (!gameIteration()) {
      break;
    }
  }
  if (i === STEPS_COUNT) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export default game;
