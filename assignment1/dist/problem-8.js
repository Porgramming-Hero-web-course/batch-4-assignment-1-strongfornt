"use strict";
{
    //function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function will return true if all of the specified keys exist in the object; otherwise, it will return false.
    const validateKeys = (obj, keys) => {
        return keys.every((key) => obj[key]);
        //manual solutions 
        // for (let key of keys){
        //     if(obj[key] === undefined) {
        //         return false
        //     }
        // }
        // return true
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const validatedKeys = validateKeys(person, ["name", "age"]);
    //
}
