{
  //sumArray function that takes an array of numbers and returns the sum of all elements in the array.
  type sumArray = (numbers: number[]) => number;
  const sumArray: sumArray = (number) => {
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
