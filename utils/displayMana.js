const chalk = require('chalk');

module.exports = (mana) => {
  let stringMana = '[';

  let i = 0;
  while (i++ < 50) {
    mana -= 2;
    if (mana >= 0) {
      stringMana += chalk.bgBlue(' ');
    } else {
      stringMana += ' ';
    }
  }

  return stringMana + ']';
};