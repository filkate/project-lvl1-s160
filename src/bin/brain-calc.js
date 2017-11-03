#!/usr/bin/node
import game from '../games/brain-calc-game';
import { greeting, play } from '..';

const name = greeting();
play(name, game);
