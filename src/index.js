import readlineSync from 'readline-sync';

const print = message => console.log(message);
const greeting = () => {
  print('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  print(`Hello, ${name}`);
};
export default greeting;
