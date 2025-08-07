//1.
//Ex:
// console.log(ucFirstLetters("los angeles") ) //Los Angeles



// const user = {
// name: "san diego",
// toString() {
// return this.name; // custom string value
// }
// function ucFirstLetters(city){
//     let splitArray = city.split(' ')
//     console.log(splitArray)
// //     for (let word of splitArray) {
// // splitArray[word.indexOf()] = word[0].toUpperCase()+word.slice(1,40)
// //     }
// let capitalizedArray = splitArray.map(word =>
//         word[0].toUpperCase() + word.slice(1)
//     );
//     const stringArray = capitalizedArray.join(' ') 
//     return stringArray
// }

// console.log(ucFirstLetters("san diego") )

//2.

// function truncateWithEllipsis(str, maxLength) {
//       if (str.length <= maxLength) {
//         return str;
//       }
//       return str.substring(0, maxLength - 3) + "...";
//       console.log(str)
//     }


//     function truncateString(str, maxLength) {
//   return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;
//   console.log(str)
// }

//3. a-b

const animals = ['Tiger', 'Giraffe']

console.log(animals)


animals.push('Zebra');
    console.log(animals);

animals.push('Lion');
    console.log(animals);

animals.unshift('Leopard');
    console.log(animals);

animals.unshift('Hyena');
    console.log(animals);

    

console.log(animals);

//c.
animals.sort();
console.log(animals);

//d.
function replaceMiddleAnimalWithOneValue(newValue) {


// if (arr.length % 2 !== 0) {
//     console.error("Array length is not even.");
//     return arr;
//   }

  const mid = animals.length / 2;

//   animals.splice(mid, 2, newValue);
animals[mid] = newValue
  return animals;
}


let updated = replaceMiddleAnimalWithOneValue('Bear');

console.log(updated); 

//e.

function beginsWith(prefix) {
  return animals.filter((animal)=>animal.startsWith(prefix));
}
console.log(beginsWith('T')); 
console.log(beginsWith('G'));
console.log(beginsWith('Z'));
console.log(beginsWith('L'));
console.log(beginsWith('L'));
console.log(beginsWith('H'));



//4.

function camelCase(cssProp) {
  return cssProp.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

//b.

const cssProps = [
  "background-image",
  "margin-left",
  "display"
];

const camelCasedProps = [];

for (let i = 0; i < cssProps; i++) {
  camelCasedProps.push(camelCase(cssProps));
}

console.log(camelCasedProps);


cssProps.forEach((prop) => {
  const camelCased = camelCase(prop);
  console.log(camelCased);
});

//5.

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

//a. We are adding two strings instead of two numbers.
//b. 
function currencyAddition(float1, float2) {
  return (float1 + float2).toFixed(2);
}
//c.

function currencyOperation(float1, float2, operation) {
  let a = Math.round(float1 * 100);
  let b = Math.round(float2 * 100);
  let resultInCents;

  switch (operation) {
    case '+':
      resultInCents = a + b;
      return (resultInCents / 100).toFixed(2);
    case '-':
      resultInCents = a - b;
      return (resultInCents / 100).toFixed(2);
    case '*':
      return (float1 * float2).toFixed(2);
    case '/':
      if (float2 === 0) return 'Error: Division by zero';
      return (float1 / float2).toFixed(2);
    default:
      return 'Error: Unsupported operation';
  }
}

//6.

function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}
console.log(unique([1, 2, 2]))

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

const cities = ['Washington D.C.', 'New York City', 'Paris', 'Brussels', 'Seoul', 'Paris', 'Barcelona', 'Washington D.C.']
const temperatures = [50, 60, 70, 80, 90, 100, 110, 50, 70, 100]

console.log(unique(cities))
console.log(unique(temperatures))

//7.

const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

let getTitle = function(book) {
  return book.title;
};

let titles = books.map(getTitle);

console.log(titles);


let findBookByTitle = function(book) {
  return book.title === '1984';
};


let book = books.find(findBookByTitle);

console.log(book);

let isClassic = function(book) {
  return book.year < 1960;
};


let classicBooks = books.filter(isClassic);

console.log(classicBooks);


//a. 
function getBookTitle(bookId) {
  const book = books.find(function(book) {
    return book.id === bookId;
  });

  
  if (book) {
    return book.title;
  } else {
    return 'Book not found';
  }
}

//b.

function getOldBooks() {
  return books.filter(function(book) {
    return book.year < 1950;
  });
}

console.log(getOldBooks());

//c.

function addGenre() {
  return books.map(function(book) {
    return { ...book, genre: 'science fiction' };
  });
}

const booksWithGenre = addGenre();
console.log(booksWithGenre);

//8. a.

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map(); 

phoneBookDEF.set('Dominique', '0496734908');
phoneBookDEF.set('Emmeline', '9639824037');
phoneBookDEF.set('Fred', '7253905647');

console.log(phoneBookDEF);

// //b.

// const phoneBookDEF = new Map([
//   ['Dominique', '0496734908'],
//   ['Emmeline', '9639824037'],
//   ['Fred', '7253905647']
// ]);

// console.log(phoneBookDEF);

// //c.

// phoneBookABC.set('Caroline', '084627293');

// console.log(phoneBookABC.get('Caroline')); 

//d.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

function printPhoneBookABC(contacts) {
  for (const [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}
console.log(printPhoneBookABC(phoneBookABC))
console.log(phoneBookABC)
//e.

let phoneBook = new Map(
  [...phoneBookABC,
   ...phoneBookDEF
  ]
)

console.log(phoneBook)

//9. a.

let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}
console.log(sumSalaries(salaries));

//b.

function topEarner(salaries) {
  return Object.value(salaries)
}

function topEarner(salaries) {
  let topSalary = 0;
  let topPerson = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topPerson = name;
    }
  }

  return topPerson;
}

console.log(topEarner(salaries)); 

//10.

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

//a.

// const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours()*60+today.getMinutes() + ' minutes have passed so far today')



//b. 

// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours()*60*60+today.getMinutes()*60+today.getSeconds() + ' seconds have passed so far today')


//c.

const birthDate = new Date(1999, 11, 19); 


let years = today.getFullYear() - birthDate.getFullYear();
let months = today.getMonth() - birthDate.getMonth();
let days = today.getDate() - birthDate.getDate();


  
  const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  days += prevMonth.getDate();



//d.





