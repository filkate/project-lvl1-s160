#!/usr/bin/node
import { make, rule } from '../games/brain-gcd-game';
import { greeting, play } from '..';

const name = greeting(rule);
play(name, make);
