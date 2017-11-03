import { cons, car, cdr } from './pairs';

export const game = (rule, step) => cons(rule, step);
export const rule = pair => car(pair);
export const step = pair => cdr(pair);
