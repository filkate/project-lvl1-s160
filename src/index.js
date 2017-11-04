import readlineSync from 'readline-sync';

function play(rule, step) {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  let i;
  for (i = 0; i < 3; i += 1) {
    const { question, answer } = step();

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer? `);
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
export default play;
