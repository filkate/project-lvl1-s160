#!/usr/bin/node
import { makeQuestion, makeAnswer, rule } from '../games/brain-gcd-game';
import { greeting, play } from '..';

const name = greeting(rule);
play(name, makeQuestion, makeAnswer);
