const Character = require('./Character');
const random = require('../utils/random');
const chalk = require('chalk');

module.exports = class Player extends Character {
  constructor(props) {
    super(props);

    this.atk = 10;
    this.bonusAtk = 0;
    this.mana = 100;

    this.attack = this.attack.bind(this);
    this.improveAtk = this.improveAtk.bind(this);
    this.heal = this.heal.bind(this);
    this.moreMana = this.moreMana.bind(this);
  }

  attack(enemy) {
    const atk = random(this.atk) + this.bonusAtk;

    console.log(`${chalk.blue(this.name)} attaque ${chalk.red(enemy.name)}`);
    enemy.hp -= atk;
    console.log(`${chalk.red(enemy.name)} subit ${chalk.red(atk)}PV de dégats`);

    enemy.alive = enemy.hp > 0;
    return (enemy.hp);
  }

  improveAtk() {
    if (this.mana >= 15){
      const bonusAtk = random(8) + 2;
      this.bonusAtk += bonusAtk;
      this.mana -= 15;
      console.log(`Vous améliorez votre attaque de ${bonusAtk}`);
    } else {
      console.log('T\'as pas assez de mana faquin!')
    }
  }

  heal() {
    if (this.mana >= 15){
      this.hp += (this.hp < 86) ? 14 : 100 - this.hp;
      this.mana -= 15;
      console.log('Vous vous soignez de 14 PV');
    } else {
      console.log('T\'as pas assez de mana faquin!')
    }
  }

  moreMana() {
    this.mana += (this.mana < 97) ? 3 : 100 - this.mana;
  }
}