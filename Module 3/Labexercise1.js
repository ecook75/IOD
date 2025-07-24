1.
console.log("" + 1 + 0)//Empty string converts to 0. Answer is 10. String + number equals a string.
console.log("" - 1 + 0)//Empty string converts to 0. Answer is -1. String +0.
console.log(true + false)// True is 1, False is 0. Answer is 1, or True.
console.log(!true)//Not true, False or 0.
console.log(6 / "3")//Answer is 2. Strings convert back into a number.
console.log("2" * "3")//These strings can be multiplied. Answer is 6
console.log(4 + 5 + "px")//4 is added with 5, then added to px. Answer 9px.
console.log("$" + 4 + 5)//$45. $, 4 and 5 are all concatenated. String plus numbers equals string
console.log("4" - 2)//2. The string operates in subject to subtraction, the same as a number.
console.log("4px" - 2)//NaN. When the string becomes a number, pixels cannot be used.
console.log(" -9 " + 5)// -9 5 The string and 5 are concatenated together keeping the negative. With a space, because there is an extra space, and counting the space during the process.
console.log(" -9 " - 5)//-14 The string is subject to subtraction like a number.
console.log(null + 1)//1. Null becomes 0 in this instance.
console.log(undefined + 1)//NaN. Undefined doesn't become a number in JS. Therefore added to 1 it equals NaN.
console.log(undefined == null)//True. It is equal, they have the same value.
console.log(undefined === null)//False. But not strictly equal.
console.log(" \t \n" - 2)//-2. String is empty. 0+2=2.

2.
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four// 34 incorrectly concatenates the strings.
let addition2 = Number(three) + Number(four)//Incorrect. Three and Four are strings that must be concatenated, not added. 7, is correct.
let multiplication = three * four//Correct. These strings can be added. 12.
let division = three / four//Correct. These strings can be divided. 8.75
let subtraction = three - four//Correct. These strings can be subtracted. -1.
let lessThan1 = three < four//Correct. Lexicographically three is less than four.
let lessThan2 = thirty < four//Incorrect. Lexicographically thirty is less than four. 3 and 0 are less than 4.
let lessThan2_fixed = Number(thirty) < Number(four)

3.
if (0) console.log('#1 zero is true')//This wont print. 0 is true.
if ("0") console.log('#2 zero is true')//This will print. 
if (null) console.log('null is true')//This wont print 0. Null becomes 0 in JS.
if (-1) console.log('negative is true')//This will print as false. a negative is false.
if (1) console.log('positive is true')//This will print.

4.
let a = 2, b = 13;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
console.log( a + b<10 ? 'less than 10' : 'greater than 10' ) 

5.
function getGreeting(name) {
return 'Hello ' + name + '!';
}
function getGreeting(return 'Hello ' + name + '!';)


