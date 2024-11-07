"use strict";
{
    const sumArray = (number) => {
        return number.reduce((sum, num) => sum + num, 0);
        // manual solution
        // let sum:number = 0;
        // for(let n of number) {
        //     sum += n;
        // }
        // return sum;
    };
    const result = sumArray([1, 2, 3, 4, 5, 12]);
    console.log(result);
    //
}
