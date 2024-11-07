"use strict";
{
    //getProperty function that takes an object and a property name as arguments and returns the property value.
    const getProperty = (obj, key) => {
        if (obj[key])
            return obj[key];
        throw new Error("Unknown object key!");
    };
    const person = {
        name: "Alice",
        age: 30,
    };
    const name = getProperty(person, "name");
}
