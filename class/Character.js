const chalk = require('chalk');
const random = require('../utils/random');

module.exports = class Character {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.alive = true;
    this.atk = 8;

    this.attack = this.attack.bind(this);
  };

  attack(enemy) {
    console.log(`${chalk.red(this.name)} attaque ${chalk.blue(enemy.name)}`);
    let randomAtk = random(this.atk);
    enemy.hp -= randomAtk;
    console.log(`${chalk.blue(enemy.name)} subit ${chalk.red(randomAtk)}PV de dégats`);

    enemy.alive = enemy.hp > 0;
    return (enemy.hp);
  }
}