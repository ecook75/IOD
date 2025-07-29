// 1.
// console.log("" + 1 + 0)//Empty string converts to 0. Answer is 10. String + number equals a string.
// console.log("" - 1 + 0)//Empty string converts to 0. Answer is -1. String +0.
// console.log(true + false)// True is 1, False is 0. Answer is 1, or True.
// console.log(!true)//Not true, False or 0.
// console.log(6 / "3")//Answer is 2. Strings convert back into a number.
// console.log("2" * "3")//These strings can be multiplied. Answer is 6
// console.log(4 + 5 + "px")//4 is added with 5, then added to px. Answer 9px.
// console.log("$" + 4 + 5)//$45. $, 4 and 5 are all concatenated. String plus numbers equals string
// console.log("4" - 2)//2. The string operates in subject to subtraction, the same as a number.
// console.log("4px" - 2)//NaN. When the string becomes a number, pixels cannot be used.
// console.log(" -9 " + 5)// -9 5 The string and 5 are concatenated together keeping the negative. With a space, because there is an extra space, and counting the space during the process.
// console.log(" -9 " - 5)//-14 The string is subject to subtraction like a number.
// console.log(null + 1)//1. Null becomes 0 in this instance.
// console.log(undefined + 1)//NaN. Undefined doesn't become a number in JS. Therefore added to 1 it equals NaN.
// console.log(undefined == null)//True. It is equal, they have the same value.
// console.log(undefined === null)//False. But not strictly equal.
// console.log(" \t \n" - 2)//-2. String is empty. 0+2=2.

// 2.
// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?
// let addition = three + four// 34 incorrectly concatenates the strings.
// let addition2 = Number(three) + Number(four)//Incorrect. Three and Four are strings that must be concatenated, not added. 7, is correct.
// let multiplication = three * four//Correct. These strings can be added. 12.
// let division = three / four//Correct. These strings can be divided. 8.75
// let subtraction = three - four//Correct. These strings can be subtracted. -1.
// let lessThan1 = three < four//Correct. Lexicographically three is less than four.
// let lessThan2 = thirty < four//Incorrect. Lexicographically thirty is less than four. 3 and 0 are less than 4.
// let lessThan2_fixed = Number(thirty) < Number(four)

// 3.
// if (0) console.log('#1 zero is true')//This wont print. 0 is true.
// if ("0") console.log('#2 zero is true')//This will print. 
// if (null) console.log('null is true')//This wont print 0. Null becomes 0 in JS.
// if (-1) console.log('negative is true')//This will print as false. a negative is false.
// if (1) console.log('positive is true')//This will print.

// 4.
// let a = 2, b = 13;
// let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }
// console.log( a + b<10 ? 'less than 10' : 'greater than 10' ) 

// 5.
// function getGreeting(name) {
// return 'Hello ' + name + '!';
// }

// //Function Expression

// // const getGreetingExpression = function(name) {return 'Hello ' + name + '!';}

// // console.log(getGreetingExpression('Eppey'))

// // //Arrow function

// // const getGreetingArrow = (name) => 'Hello' + name + '!';

// // console.log(getGreetingExpression('Eppey'))

// //6.

//  const westley = {
// name: 'Westley',
// numFingers: 5 
// }
// const rugen = {
// name: 'Count Rugen',
// numFingers: 6
// }
// const inigo = {
// firstName: 'Inigo',
// lastName: 'Montoya',
// greeting(person) {
// let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
// console.log(greeting + this.getCatchPhrase(person));
// },
// getCatchPhrase(rugen) {
// return 'You killed my father. Prepare to die.';
// }
// }
// inigo.greeting(westley)
// inigo.greeting(rugen)

// //7.

// const basketballGame = {
// score: 0,

// foul:0,

// freeThrow() {
// this.score++;
// return this; 
// },
// basket() {
// this.score += 2;
// return this;
// },
// threePointer() {
// this.score += 3;
// return this;
// },
// foulCount() {
// this.foul ++;
// return this;
// },
// halfTimeScore() {
// console.log('Halftime score is '+this.score);
// console.log('Halftime fouls is '+this.foul);
// return this;
// },
// finalScore() {
// console.log('Full final score is '+this.score);
// console.log('Full final fouls is '+this.foul);
// return this;
// }

// }
// // console.log(this.score+=2('5'))


// // // //modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().foulCount().halfTimeScore().basket().threePointer().finalScore();


//8.
const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
}



const melbourne = {
name: 'melbourne',
population: 5_392_000,
state: 'Victoria',
founded: '1835',
timezone: 'AEST'
}

for (let key in sydney) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + sydney[key]); // prints each object value in turn
}

for (let key in melbourne) { // iterates over each property in the phone object, stores in ‘key’ variable
console.log('key: ' + key); // prints each object property name (key) in turn
console.log('value: ' + melbourne[key]); // prints each object value in turn
}




9.

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];


let moreSports = teamSports;


    teamSports.push('Football');
    console.log(teamSports);


    teamSports.unshift('Soccer');
    console.log(teamSports); 


let dog1 = 'Bingo';

let dog2 = dog1;
dog2 = 'Bear';

console.log(dog1);


let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1

cat1.name = 'Luna';

console.log(cat1);

//10.

function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
this.canDrive = () => this.age <= 15? "can't drive" : "can drive" ;
}



let user1 = new Person('Tim', 14); 
console.log(user1); 
console.log(user1.canDrive()); 



let user2 = new Person('Anne', 26); 
console.log(user2);
console.log(user2.canDrive()); 

class PersonClass {
constructor(name, age) {
this.name = name;
this.age = age;
this.human = true;
}

canDrive() {
return this.age <= 15? "can't drive" : "can drive" ;
}
}

let user3 = new PersonClass('Anne', 13); 
console.log(user3);
console.log(user3.canDrive()); 


