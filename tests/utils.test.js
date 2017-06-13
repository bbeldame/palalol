const random = require('../utils/random');

describe('get random number', () => {
  it('returns a random number between 0 and 10', () => {
    let i = 57;

    while (i-- !== 0) {
      let randomNb = random(10);
      expect(randomNb)
        .toBeLessThanOrEqual(10);
      expect(randomNb)
        .toBeGreaterThanOrEqual(0);
    }
  });
});