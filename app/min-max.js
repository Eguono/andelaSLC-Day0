'use strict';

module.exports.findMinMax = (arr) => {

    if(Array.isArray(arr) === false){
        return "Invalid Input";
    }
    
    else if (arr !== []) {
        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);

        if (min === max) {
            return [min];
        }
        return [min, max];
    }
    else {
        return [];
    }
}
