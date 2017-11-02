import readlineSync from 'readline-sync';

const print = message => console.log(message);
function greeting() {
  print('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  print(`Hello, ${name}`);
  return name;
}
export default greeting;
