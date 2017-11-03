import readlineSync from 'readline-sync';
import { question, answer } from './type';

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


export function play(name, func) {
  let i;
  for (i = 0; i < 3; i += 1) {
    const game = func();
    const userAnswer = readlineSync.question(`Question: ${question(game)}\nYour answer? `);
    if (userAnswer === answer(game)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer(game)}.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
