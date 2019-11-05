export class FizzBuzz{

    constructor(){
        
    }

    isMultipleOf3(value:number) {
        var isMultipleOf3: boolean = false;

        if(value % 3 == 0){
            isMultipleOf3 = true;
        }

        return isMultipleOf3;
    }

    isMultipleOf5(value:number) {
        var isMultipleOf5: boolean = false;

        if(value % 5 == 0){
            isMultipleOf5 = true;
        }

        return isMultipleOf5;
    }

    isMultipleOf3And5(value: number){
        var isMultipleOf3And5: boolean = false;

        if(this.isMultipleOf3(value) && this.isMultipleOf5(value)){
            isMultipleOf3And5 = true;
        }

        return isMultipleOf3And5;
    }


    sendMessage(value: number){

        if(this.isMultipleOf3And5(value)){
            return "fizzbuzz";
        }else if(this.isMultipleOf5(value)){
            return "buzz";
        }else if(this.isMultipleOf3(value)){
            return "fizz";
        }
    }
    
}