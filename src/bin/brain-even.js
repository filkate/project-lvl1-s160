#!/usr/bin/node
import game from '../games/brain-even-game';
import { greeting, play } from '..';

const name = greeting();
play(name, game);
