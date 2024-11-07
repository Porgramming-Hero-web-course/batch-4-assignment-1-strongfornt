{
    //  removeDuplicates function that accepts an array of numbers and returns a new array with duplicates removed.

    type removeDuplicates = (numbers: number[]) => number[];

    const removeDuplicates:removeDuplicates = (numbers) => {

        return [...new Set(numbers)]

        //Manual solution ---
        // let filteredArray: number[] = []
        // for (let i of numbers) {
        //    if(!filteredArray.includes(i)){
        //     filteredArray.push(i)
        //    }  
        // }
        // return filteredArray
        
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);    
  
    

}