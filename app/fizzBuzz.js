'use strict';

module.exports.fizzBuzz = (num) => {
    if (typeof(num) !== typeof(5)){
        return "Invalid Input"
    }

    else if (num <= 0){
        return "Number must be greater than 0"
    }
    for (let i = 0; i <= num; i++) {
        if ((num % 3 === 0) && (num % 5 === 0)) {
            return "FizzBuzz";
        }
        else if (num % 3 === 0) {
            return "Fizz";
        }
        else if (num % 5 === 0) {
            return "Buzz";
        }
        else {
            return num;
        }
    }
}