import mailDoesntContainAnySymbol from './mailContainsOnlyLettersNumbers'

describe('mailDoesntContainAnySymbol', () => {
    it('string contains only latin letters, numbers, _ @ .', () => {
      const result = mailDoesntContainAnySymbol("asd1.a_sd@asd.lv");  
      expect(result).toEqual(true);
    });
  });