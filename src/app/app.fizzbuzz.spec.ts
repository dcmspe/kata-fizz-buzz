import { FizzBuzz } from './app.fizzbuzz';

describe('FizzBuzz', () => {

  it('should create a fiz buzz instance', () => {

    var fizzBuzz = new FizzBuzz();
    
    expect(fizzBuzz).not.toBe(null);

  });
  

  it('should return if a number is multiple of 3', () => {

    var fizzBuzz = new FizzBuzz();
    
    expect(fizzBuzz.isMultipleOf3(3)).toBe(true);

  });

  it('should return if a number is multiple of 5', () => {

    let fizzBuzz = new FizzBuzz();
    
    expect(fizzBuzz.isMultipleOf5(5)).toBe(true);

  });

  it('should return if a number is multiple of 3 and 5', () => {

    let fizzBuzz = new FizzBuzz();
    
    expect(fizzBuzz.isMultipleOf3And5(30)).toBe(true);

  });

  it('should make fizz', () => {

    console.log("starting method");

    let fizzBuzz = new FizzBuzz();

    var value:number = 3;
    
    expect(fizzBuzz.sendMessage(value)).toBe('fizz');
  });

  it('should make buzz', () => {

    console.log("starting method");

    let fizzBuzz = new FizzBuzz();

    var value:number = 5;
    
    expect(fizzBuzz.sendMessage(value)).toBe('buzz');
  });
  
  it('should make fizbuzz', () => {

    console.log("starting method");

    let fizzBuzz = new FizzBuzz();

    var value:number = 15;
    
    expect(fizzBuzz.sendMessage(value)).toBe('fizzbuzz');
  });
});
