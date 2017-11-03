import readlineSync from 'readline-sync';
import { rule, step } from './type';

const STEPS_COUNT = 3;

const print = message => console.log(message);
export function greeting() {
  print('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  print(`Hello, ${name}`);
  return name;
}


export function play(name, game) {
  console.log(rule(game));
  let i;
  for (i = 0; i < STEPS_COUNT; i += 1) {
    if (!step(game)()) {
      break;
    }
  }
  if (i === STEPS_COUNT) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}
