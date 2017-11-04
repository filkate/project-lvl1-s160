const rule = 'Answer "yes" if number even otherwise answer "no"';
const makeQuestion = () => Math.round(Math.random() * 100);
const isEven = num => num % 2 === 0;
const makeAnswer = num => (isEven(num) ? 'yes' : 'no');


export { rule, makeQuestion, makeAnswer };
