const Chalk = require('chalk');

module.exports = (int) => {
  let chalked;

  if (int > 70) {
    chalked = Chalk.green(int);
  } else if (int > 30) {
    chalked = Chalk.yellow(int);
  } else {
    chalked = Chalk.red(int);
  }

  return chalked;
};