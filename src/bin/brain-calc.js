#!/usr/bin/node
import { makeQuestion, makeAnswer, rule } from '../games/brain-calc-game';
import { greeting, play } from '..';

const name = greeting(rule);
play(name, makeQuestion, makeAnswer);
