'use strict';

module.exports.aritGeo = (arr) => {

    if (arr.length === 0) {
        return 0;
    } else {
        let geoDifference = arr[arr.length - 1] / arr[arr.length - 2];
        let aritDifference = arr[arr.length - 1] - arr[arr.length - 2]

        if (arr[1] - arr[0] === aritDifference) {
            return "Arithmetic";
        }
        else if (arr[1] / arr[0] === geoDifference) {
            return "Geometric";
        }
    }
    return -1;
}

