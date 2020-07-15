const { mean, median, mode } = require('./math');

describe('testing math functions', () => {

  test('mean', () => {
    expect(mean([1,2,3])).toEqual(2);
      expect(mean([0,1,0])).toEqual(1/3);
      expect(mean([10,1,3,6])).toEqual(5);
      expect(mean([2])).toBeNull();
  })
    
  test('median', () => {
      expect(median([1,2,3])).toEqual(2);
      expect(median([1])).toBeNull();
      expect(median([10,1,3,6])).toEqual(4.5);
      expect(median([2,3])).toEqual(2.5);
      expect(median([0,0])).toEqual(0);
  })

  test('mode', () => {
      expect(mode([1,2,3])).toEqual([1,2,3]);
      expect(mode([1,1,2,3])).toEqual([1]);
      expect(mode([1,3,2,1,3])).toEqual([1,3]);
      expect(mode([2])).toEqual([2]);
  })

    
})