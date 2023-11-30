import mailContainsCharAt from './mailcontains@'
  
describe('mailContainsCharAt', () => {
    it('string contains char @ only once', () => {
      const result = mailContainsCharAt("as@dfg.rt");  
      expect(result).toEqual(true);
    });
  });