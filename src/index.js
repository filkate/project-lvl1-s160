import readlineSync from 'readline-sync';

const print = message => console.log(message);
export function greeting(message) {
  print('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  print(`Hello, ${name}`);
  if (message) {
    print(message);
  }
  return name;
}


export function play(name, makeQuestion, makeAnswer) {
  let i;
  for (i = 0; i < 3; i += 1) {
    const question = makeQuestion();
    const answer = makeAnswer();
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
