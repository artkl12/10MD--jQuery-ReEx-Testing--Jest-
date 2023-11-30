import nameDoesntContainAnySymbol from './onlyLetters';

describe('nameDoesntContainAnySymbol', () => {
    it('string doesn`t contain symbols and spaces', () => {
      const result = nameDoesntContainAnySymbol("Er st%^&*");  
      expect(result).toEqual(false);
    });

    it('Latvian letters are allowed', () => {
      const result = nameDoesntContainAnySymbol("reņģe");  
      expect(result).toEqual(true);
    });
  });