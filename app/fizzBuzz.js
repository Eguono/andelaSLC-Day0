'use strict';

module.exports.fizzBuzz = (num) => {
    if (typeof(num) !== typeof(5)){
        return "Invalid Input"
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