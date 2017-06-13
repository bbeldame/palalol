const Character = require('./Character');
const random = require('../utils/random');

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

    console.log(`${this.name} attaque ${enemy.name}`);
    enemy.hp -= atk;
    console.log(`${enemy.name} subit ${atk}PV de dégats`);

    enemy.alive = enemy.hp > 0;
    return (enemy.hp);
  }

  improveAtk() {
    const bonusAtk = random(10);
    this.bonusAtk += bonusAtk;
    console.log(`Vous améliorez votre attaque de ${bonusAtk}`);
  }

  heal() {
    if (this.mana >= 25){
      this.hp += (this.hp < 86) ? 14 : 100 - this.hp;
      this.mana -= 25;
      console.log('Vous vous soignez de 14 PV');
    } else {
      console.log('T\'as pas assez de mana faquin!')
    }
  }

  moreMana() {
    this.mana += (this.mana < 97) ? 3 : 100 - this.mana;
  }
}