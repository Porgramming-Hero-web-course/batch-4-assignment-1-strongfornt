[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16978973&assignment_repo_type=AssignmentRepo)


## How to Handle Asynchronous Operations Using async/await Over Callback/Promise in TypeScript (blog-2)
In TypeScript, handling asynchronous operations can be done using callbacks, promises, or the modern async/await. Let’s see why async/await is generally the best option.

## 1. Callback Approach
Callbacks were the first method for handling asynchronous operations. However, they can lead to callback hell when nested and are harder to read and maintain.

function fetchData(url: string, callback: (data: string) => void) {
  setTimeout(() => callback(`Data from ${url}`), 2000);
}




## 2. Promise Approach

Promises improve on callbacks by allowing better chaining and more readable error handling, but .then() chains can still become cumbersome with multiple asynchronous operations.

fetchData('https://api.com').then(console.log).catch(console.error);


## 3. Async/Await: The Modern Approach

async/await makes asynchronous code look like synchronous code, greatly improving readability and making it easier to handle errors using try/catch.

const fetchData = async (url: string): Promise<string> => {
  const response = await fetch(url); 
  return await response.text();
};



## Why choose async/await over others?
- Cleaner syntax: Looks like synchronous code, making it easier to follow.
- Simpler error handling: Use try/catch just like synchronous code.
- Avoids callback hell: Easier to manage multiple async operations.
