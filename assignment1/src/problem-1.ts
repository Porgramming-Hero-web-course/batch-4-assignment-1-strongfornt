{
    //sumArray function that takes an array of numbers and returns the sum of all elements in the array.
        type sumArray = (numbers: number[]) => number;
        const sumArray:sumArray = (number) => {
            return number.reduce((sum, num) => sum + num, 0);
        };

        const result = sumArray([1,2,3,4,5,12])
       
    //
}