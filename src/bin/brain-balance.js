#!/usr/bin/node
import { makeQuestion, makeAnswer, rule } from '../games/brain-balance-game';
import { greeting, play } from '..';

const name = greeting(rule);
play(name, makeQuestion, makeAnswer);
