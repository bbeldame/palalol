const prompt = require('prompt');
const chalk = require('chalk');

const chalkHp = require('../utils/chalkHp');
const displayMana = require('../utils/displayMana');
const displayHealth = require('../utils/displayHealth');
const Player = require('./Player');
const Enemy = require('./Enemy');


module.exports = class Game {
  constructor() {
    this.player = new Player('Jean-Michel Paladin');
    this.enemies = [
      new Enemy('Squelette'),
      new Enemy('Balrog'),
      new Enemy('Gobelin'),
    ];
    this.actions = [];
    this.turn = 0;
  }

  _enemiesAttack() {
    this.enemies
      .filter(enemy => enemy.alive)
      .map(enemy => {
        enemy.attack(this.player);
    });
  }

  /**
   * Returns true if the player is dead
   * or if all the enemies are dead
   * @memberof Game
   */
  _gameContinue() {
    return (this.player.alive && this.enemies.find(enemy => enemy.alive));
  }

  _endGame() {
    if (this.player.alive) {
      this._gameContinue() || console.log('Bravo vous avez gagné !');
    } else {
      console.log('Quelle grosse merde ! T\'as perdu!');
    }
  }

  _displayInfos() {
    let i = 0;

    this.actions = [];
    console.log(`======= Tour ${this.turn} ========`);
    console.log(`HP de votre héros : ${displayHealth(this.player.hp)}`);
    console.log(`MP de votre héros : ${displayMana(this.player.mana)}`);
    console.log(`Attaque de votre héros : ${this.player.bonusAtk}-${this.player.atk + this.player.bonusAtk}`);
    this.turn += 1;

    this.actions.push({
      string: `${chalk.cyan.bold(i++)} - Se soigner (15 MP)`,
      func: this.player.heal,
    });
    this.actions.push({
      string: `${chalk.cyan.bold(i++)} - Améliorer son attaque (15 MP)`,
      func: this.player.improveAtk,
    })
    this.enemies
      .filter(enemy => enemy.alive)
      .map(enemy => {
        this.actions.push({
          string: `${chalk.magenta.bold(i++)} - Attaquer ${chalk.red(enemy.name)} hp: ${chalkHp(enemy.hp)}/100`,
          func: () => this.player.attack(enemy),
        });
    });

    this.actions.map(line => console.log(line.string));
    console.log('q - Quitter');
  }

  init() {
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    console.log(`
        ${chalk.yellow.underline(`Ainsi débutent les aventures de ${this.player.name}`)}
                `);
    this._gameLoop();
  }

  _gameLoop(){
    this._displayInfos();
      prompt.start();
      prompt.get([{
        name: 'choice',
        description: 'Entrez votre action',
        pattern: /[0-9]|q/,
        message: 'Soyez pas con',
        required: true,
      }], (err, result) => {
        if (result && result.choice === 'q') { process.exit(); }
        if (result && this.actions[result.choice]) {
          this.actions[result.choice].func();
          console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
          this._enemiesAttack();

          this.player.moreMana();
        } else {
          console.log('Action inconnue !');
        }

        if (this._gameContinue() && !err && result){
          this._gameLoop();
        } else {
          this._endGame();
        }
      });
  }
  
}