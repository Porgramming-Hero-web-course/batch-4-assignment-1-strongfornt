{
  //getProperty function that takes an object and a property name as arguments and returns the property value.

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    if (obj[key]) return obj[key];

    throw new Error("Unknown object key!");
  };

  const person = {
    name: "Alice",
    age: 30,
  };

  const name = getProperty(person, "name");
}
