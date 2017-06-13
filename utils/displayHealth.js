const chalk = require('chalk');
const chalkHp = require('./chalkHp');

color = (int) => {
  let chalked;

  if (int > 70) {
    chalked = chalk.bgGreen(' ');
  } else if (int > 30) {
    chalked = chalk.bgYellow(' ');
  } else {
    chalked = chalk.bgRed(' ');
  }

  return chalked;
};

module.exports = (hp) => {
  const totalhp = hp;
  let stringhp = '[';

  let i = 0;
  while (i++ < 50) {
    hp -= 2;
    if (hp >= 0) {
      stringhp += color(totalhp);
    } else {
      stringhp += ' ';
    }
  }

  return stringhp + ']';
};