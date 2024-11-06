{
    //  removeDuplicates function that accepts an array of numbers and returns a new array with duplicates removed.

    type removeDuplicates = (numbers: number[]) => number[];

    const removeDuplicates:removeDuplicates = (numbers) => {
        return [...new Set(numbers)]
    }

    const result = removeDuplicates([1,7,7,2,3,4,4,5]);

    console.log(result);
    

}