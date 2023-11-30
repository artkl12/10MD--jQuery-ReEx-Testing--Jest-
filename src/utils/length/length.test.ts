import nameLengthFrom2To50 from './length';

describe('checkLength', () => {
    it('should check length between 2 and 50', () => {
      const result = nameLengthFrom2To50("abc");  
      expect(result).toEqual(true);
    });

    it('should check length less than 2', () => {
        const result = nameLengthFrom2To50("a");  
        expect(result).toEqual(false);
      });

    it('should check length more than 50', () => {
        const result = nameLengthFrom2To50("123456789123456789123456789123123456789123456789123");  
        expect(result).toEqual(false);
        });
  });