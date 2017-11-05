import readlineSync from 'readline-sync';

function play(rule, step) {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  console.log('\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  const isSuccess = (correctAnswers) => {
    if (correctAnswers === 3) {
      return true;
    }
    const { question, answer } = step();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer? `);
    if (userAnswer === answer) {
      console.log('Correct!');
      const newCorrectAnswers = correctAnswers + 1;
      return isSuccess(newCorrectAnswers);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
    return false;
  };

  if (isSuccess(0)) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
export default play;
