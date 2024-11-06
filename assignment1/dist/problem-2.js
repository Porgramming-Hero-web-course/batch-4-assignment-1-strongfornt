"use strict";
{
    const removeDuplicates = (numbers) => {
        return [...new Set(numbers)];
    };
    const result = removeDuplicates([1, 7, 7, 2, 3, 4, 4, 5]);
    console.log(result);
}
