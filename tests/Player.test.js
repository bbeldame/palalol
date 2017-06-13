const Player = require('../class/Player');

describe('Player', () => {
  it('creates a new player', () => {
    const newChara = new Player('Basole');

    expect(newChara.name).toBe('Basole');
    expect(newChara.hp).toBe(100);
  });
});