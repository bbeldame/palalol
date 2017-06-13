const Character = require('../class/Character');

describe('Character', () => {
  it('creates a new character', () => {
    const newChara = new Character('Basole');

    expect(newChara.name).toBe('Basole');
    expect(newChara.hp).toBe(100);
  });
});