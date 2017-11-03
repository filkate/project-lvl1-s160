import { cons, car, cdr } from './pairs';

export const game = (question, answer) => cons(question, answer);
export const question = pair => car(pair);
export const answer = pair => cdr(pair);
