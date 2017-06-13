const Enemy = require('../class/Enemy');

describe('Enemy', () => {
  it('creates a new enemy', () => {
    const newChara = new Enemy('Basole');

    expect(newChara.name).toBe('Basole');
    expect(newChara.hp).toBe(100);
  });
});