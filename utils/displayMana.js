const chalk = require('chalk');

module.exports = (mana) => {
  const totalmana = mana;
  let stringMana = '[';

  let i = 0;
  while (i++ < 50) {
    mana -= 2;
    if (mana >= 0) {
      stringMana += (totalmana > 15) ?
        chalk.bgBlue(' ') : chalk.bgWhite(' ');
    } else {
      stringMana += ' ';
    }
  }

  return stringMana + ']';
};