import play from '..';

const rule = 'What number is missing in this progression?';


const step = () => {
  const stepProgression = Math.round(Math.random() * 10);
  const startProgression = Math.round(Math.random() * 10);
  const hiddenElement = Math.round(Math.random() * 10);
  const progressionArr = [];
  progressionArr.push(startProgression);
  for (let i = 1; i < 10; i += 1) {
    progressionArr.push(startProgression + (stepProgression * i));
  }
  const answer = progressionArr[hiddenElement].toString();
  progressionArr[hiddenElement] = '..';
  const question = progressionArr.join(' ');
  return { question, answer };
};

export default () => play(rule, step);
