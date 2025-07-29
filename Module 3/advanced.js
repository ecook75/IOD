// let globalVariableCat = 'cat';
// function myFunction() {
// let localVariableDog = 'dog'
// return 'global function with local scope variable '+localVariableDog;
// }
// console.log(globalVariableCat) // ReferenceError: localVariableDog is not defined

// //const dogValue = myFunction();

// //console.log(globalVariableCat); // 'cat'
// //console.log(dogValue);//global function with local scope variable dog

// // globalEnvironment = {
// // environmentRecord: {
// // globalVariableCat: 'cat', // has no access to localVariableDog
// // myFunction: <reference to function object>,
// // }
// // outer: null // there is no parent environment here
// // }
// // localMyFunctionEnvironment = {
// // environmentRecord: {
// // localVariableDog: 'dog'
// // },
// // outer: globalEnvironment // can still access everything in global //}

// function makeAdder(x) { // function factory: bundles value of x into the scope of adder
// return function adder(y) { // closure function 'adder' now has access to both x and y when created
// return x + y;
// };
// }

// const add5 = makeAdder(5); // sets x to 5, even when adder function is returned and called
// console.log( add5(10) ) // x is still 5 and y is 10, result is 15


// function makeHeading(hTag) { // every call to makeHeading could have different values for hTag
// return function(title) { // unnamed closure function, can access value of hTag when created
// return `<${hTag}>${title}</${hTag}>`
// }
// }

// const getH1 = makeHeading('h1') // sets hTag to h1, creates new instance of closure in getH1
// const getH2 = makeHeading('h2') // sets hTag to h2, creates separate instance of closure in getH2

// console.log( getH1('Heading 1') ) // sets title to Heading 1 inside <h1>: <h1>Heading 1</h1>
// console.log( getH2('Heading 2') ) // sets title to Heading 2 inside <h2>: <h2>Heading 2</h2>

// function sayHiDefn() { console.log('Hi (function definition)'); } // named function
// const sayHiExpn = function() { console.log('Hi (function expression)'); } // named variable
// const sayHiArrow = () => console.log('Hi (arrow function)'); // named variable

// //.name property exists as a built-in default property for all functions
// console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
// console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
// console.log(sayHiArrow.name) // sayHiArrow - figures out name from context

// function oneParam(a) {
// console.log('This function has a single parameter: ' + a)
// }
// function twoParams(a, b) {
// console.log(`This function has two parameters: ${a} and ${b}`)
// }
// function manyParams(a, b, ...extras) {
// console.log(`This function has two parameters and one extra: ${a} and ${b} and ${extras}`)
// }
// console.log(oneParam.length) // 1
// console.log(twoParams.length) // 2
// console.log(manyParams.length) // 2, because extras is 'the rest' and can't be counted

// function sayHi() {
// console.log('Hi');
// sayHi.counter++; // increment the custom counter property every time the function is called
// }
// sayHi.counter = 2 // initialise the counter to 0 before calling it

// sayHi() // Hi - calls the function and increments the counter
// sayHi() // Hi - calls the function and increments the counter again
// sayHi() // Hi - calls the function and increments the counter again
// sayHi() // Hi - calls the function and increments the counter again
// sayHi() // Hi - calls the function and increments the counter again
// sayHi() // Hi - calls the function and increments the counter again
// console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times

// function printMessage(msg) {
// console.log(`Message: ${msg}`)
// }
// // function to be executed, then milliseconds to delay, then arguments for function
// let timerId = setTimeout(printMessage, 5000, 'prints after 5 sec') // Message: prints after 1 sec


// let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
// clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

// setTimeout( () => console.log("log statement inside arrow function"), 500 )
// // prints 'log statement inside arrow function' after 0.5 seconds

// setTimeout( () => console.log("first message"), 5000 ); //asynchronous code with 5s delay
// setTimeout( () => console.log("second message"), 3000 ); //asynchronous code with 3s delay
// setTimeout( () => console.log("third message"), 1000 ); //asynchronous code with 1s delay
// setTimeout( () => console.log("fourth message"), 0 ); //asynchronous code with no delay
// console.log("fifth message"); //standard synchronous code
// //order of messages when running code:
// // fifth message (first, synchronous therefore no delay)
// // fourth message (second, even though comes before fifth message, still no delay)
// // third message (prints after 1s)
// // second message (prints after 3s)
// // first message (prints after 5s). Timers do not stack, so total of 5s delay between first and fifth



// let tickId = setInterval( () => console.log('tick'), 2000 ) // 'tick' every 2s
// setTimeout( () => clearInterval(tickId), 10*1000 ) // after 10s ticking stops



// function repeatInterval(delay, limit)
// {
// let counter = 1; // part of the outer environment record for repeatInterval
// // intervalTimer is a reference to interval, to allow it to be cancelled
// let intervalTimer = setInterval(function repeatThis() {
// console.log('repeatInterval: repeated '+counter+' of '+limit+' times');
// if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
// counter++; // keep track of how many times the interval has executed, in outer environment
// }, delay); // delay is milliseconds between intervals
// }
// repeatInterval(6000, 5); // make the interval repeat every 2 seconds for a max of 10 times

function repeatTimeout(delay, limit)
{
let counter = 1;
// setTimeout only happens once, so we don't need the reference to cancel it
setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
console.log('repeatTimeout: repeated ' + current + ' of ' + limit + ' times');
// we do need to call setTimeout recursively so that it repeats executing the function
if (current < limit) setTimeout(repeatThis, delay, current+1) // repeat if limit not reached
}, delay, counter);
}
repeatTimeout(2000, 10); // make the timeout repeat every 2 seconds for a max of 10 times

