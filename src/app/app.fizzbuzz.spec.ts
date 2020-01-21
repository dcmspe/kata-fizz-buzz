import { FizzBuzz } from './app.fizzbuzz';

describe('FizzBuzz', () => {

  it('should create a fiz buzz instance', () => {

    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz).not.toBe(null);

  });

  it("should make fizzbuzz says when a value is multiple of 3", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.isMultipleOf3(6)).toBe(true);
  });

  it("should make fizzbuzz says when a value is multiple of 5", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.isMultipleOf5(10)).toBe(true);
  });

  it("should make fizzbuzz says when a value is multiple of 3 & 5", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.isMultipleOf3and5(15)).toBe(true);
  });

  it("should make fizzbuzz says fizz when a value is multiple of 3", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.sendValue(3)).toBe("fizz");
  });

  it("should make fizzbuzz says buzz when a value is multiple of 5", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.sendValue(5)).toBe("buzz");
  });

  it("should make fizzbuzz says fizzbuzz when a value is multiple of 3&5", function(){
    var fizzBuzz = new FizzBuzz();

    expect(fizzBuzz.sendValue(15)).toBe("fizzbuzz");
  });

  it("should give array and expect the array to contains fizz, buzz, fizzbuzz", function(){
    var fizzBuzz = new FizzBuzz();
    var array = fizzBuzz.sendArray([1,3,15,20]);
    expect(array).toEqual([1,"fizz","fizzbuzz","buzz"]);
  });
});
