# Ice Cream Flavor Challenge

Front end A/B testing demands a strong working knowledge of asynchronous JavaScript and DOM manipulation. There are often many different ways to achieve the same result.

Clone this repository and push your solutions to your own GitHub account. See email for submission instructions.

## Instructions

A global array, `window.iceCreamFlavors`, is empty on page load. At a random point shortly after page load, this array will be populated by a list of string data.

Provide JavaScript code which will reliably retrieve this data after it is updated, and display it on the page in a manner of your choosing. The data should be used as soon as possible after it is available.

How to install:

- Use `npm i` to install dependencies
- Use `npm run start` to create a localhost environment
- Navigate to `localhost:1234`

Code written in `/solutions/index.js` will execute at page load. The development server includes hot module reloading, so updates to files in `/solutions` will reload the server.

When you have a functional solution, create a new solution file in the `/solutions` directory. Filenames should follow the following convention: `solution1.js`, `solution2.js`, etc.

Please include at least 2 solutions, but feel free to create more.

## Assumptions & Limitations

- Your code will execute in a global context
- jQuery will be available globally as `window.$`, if needed
- The DOM state will be reset between solutions, i.e. when reviewed, `solution1.js` will be run independently of `solution2.js`
- No external libraries can be used, with the exception of jQuery
- Only files in the `/src/solutions` directory may be modified, i.e. do not make updates to `/src/index.html`
- ES7 syntax is valid, and your code will be transpiled by Babel
