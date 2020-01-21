export class FizzBuzz{

    constructor(){

    }

    isMultipleOf3(value:number){
      return value % 3 == 0;
    }

    isMultipleOf5(value:number){
      return value % 5 == 0;
    }


    isMultipleOf3and5(value:number){
      return this.isMultipleOf3(value) && this.isMultipleOf5(value);
    }


    sendValue(value:number){

      if (this.isMultipleOf3and5(value)){
        return "fizzbuzz";
      } else if (this.isMultipleOf5(value)){
        return "buzz";
      } else if (this.isMultipleOf3(value)){
        return "fizz";
      } else {
        return value;
      }
    }

    sendArray(array:Array<any>){
      var index = 0;
      array.forEach(value =>  {
        array[index]=this.sendValue(value);
        index++;
      });
      return array;
    }
}
