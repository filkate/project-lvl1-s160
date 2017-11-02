#!/usr/bin/node
import game from '../brain-even-game';
import greeting from '..';

const name = greeting();
game(name);
