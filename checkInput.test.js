const { checkInput } = require('./checkInput');
const ExpressError = require('./expressError');

describe('testing checkInput function', () => {
  
  test('checkInput', () => {
    expect(() => {checkInput('1,2,a');}).toThrow(ExpressError);
    expect(() => {checkInput('');}).toThrow(ExpressError);
    expect(checkInput('1,2,3')).toEqual([1,2,3]);
  })
})