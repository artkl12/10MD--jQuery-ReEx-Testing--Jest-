import validEmail from './mail';

describe('validEmail', () => {
    it('string has at least 5 characters ', () => {
      const result = validEmail("a@a.a");  
      expect(result).toEqual(true);
    });

    it('string has at least 1 dot ', () => {
        const result = validEmail("a.a@a.a");  
        expect(result).toEqual(true);
      });

  });
