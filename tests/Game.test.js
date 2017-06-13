const Game = require('../class/Game');

describe('Game', () => {
  const game = new Game();
  it('creates a new game', () => {

    expect(game.enemies.length).toBe(3);
    expect(game.player.name).toBe('Jean-Michel Paladin');
  });

  it('heal the player', () => {
    game.player.hp = 67;

    game._displayInfos();
    game.actions[0].func();
    expect(game.player.hp).toBe(77);
    game.actions[0].func();
    expect(game.player.hp).toBe(87);
    game.actions[0].func();
    expect(game.player.hp).toBe(97);
    game.actions[0].func();
    expect(game.player.hp).toBe(100);
  });

  it('damages a monster', () => {
    game._displayInfos();

    game.actions[2].func();
    expect(game.enemies[0].hp).toBeLessThan(100);

    game.actions[3].func();
    expect(game.enemies[1].hp).toBeLessThan(100);
  });
});