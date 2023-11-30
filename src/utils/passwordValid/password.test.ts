import passwordContainsNumberChar from './password'

describe('passwordContainsNumberChar', () => {
    it('string is at least 8 chars long', () => {
      const result = passwordContainsNumberChar("Psk*7!s");  
      expect(result).toEqual(false);
    });   

    it('string contains letter, number and special character', () => {
        const result = passwordContainsNumberChar("Pask*7!s");  
        expect(result).toEqual(true);
      });   
  });