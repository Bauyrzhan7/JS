/*
    The 7 different types in JavaScript are:

    String - a string is anytime that you have some text (you will often see that in a single or double quote or a backtick)
    Number - a number (regardless of whether it has a decimal place in it. Some programming languages have multiple types to deal with numbers, but JavaScript only has the one.)
    Object - this is a special one, we will go over this one last. Everything in JavaScript is an object, and we will understand what that is when we start to hit methods. Everything that we use like functions, dates, and arrays are just objects at the end of the day. All the other types except for object are referred to as the "primitive types".
    Boolean - true or false
    Null - can be used to set a variable to nothing (we will discuss difference between undefined and null shortly)
    Undefined - can be used to set a variable to nothing (we will discuss difference between undefined and null shortly)
    Symbol - this is a new one to JavaScript, and it will always give us a guaranteed unique identifier. This is useful for when you are trying to come with a unique identifier inside of an object and you want to make sure you are not also overwriting something that already exists with that id.

 */

// TODO: Strings
const name = "wes";
const middle = 'topher';
const last = `bos`;

// const sentence = 'she's so cool'; // as a string

/*
    Escaping in JavaScript allows you to tell JavaScript "No, I actually want this character, don't interpret it as JavaScript syntax, interpret it as text."
 */
// const sentence = 'she\'s so cool \\';
// const sentence = "she's so "cool"" // as a string
// const sentence = "she's so \"cool\"";

// const name = 'Test';
// const surname = 'Test2';


// const res = "name is " + name + " surname is" + surname;
// const res = `name is ${name} surname is ${surname}`;

// Backtick
// const sentence = `she's so "cool"`;

/*
    Putting String on Multiple Lines
 */
const song = `Ohhh
ya
I like
pizza`;

// const res = "Ohh" +
//     "ya" +
//     "I like"
//
// console.log(song);
//
// const html = `
//   <div>
//     <h1>${last}</h1>
//     <p>Test</p>
//   </div>
// `;
// document.body.innerHTML = html;

// let age = 100;

// TODO: NUMBERS
// 10 / "dog"; // Return NaN

// TODO: Objects
/*
    Objects in JavaScript are the biggest building block and almost everything in JavaScript is an object.
    Objects are used for collections of data or collections of functionality.
 */

// const person = {
//     name: 'Test',
//     age: 12,
//     _AWFULLL_NAME: 'Batyr'
// }

// person.age = 20;
// console.log(person)
// console.log(person._AWFULLL_NAME)

// person.name = 'Nurlan';
// person.age = 20;
// console.log(person);

// const person = {
//     name: 'Bauyrzhan',
//     age: 35,
// }
// console.log(person.name)
// console.log(person.age)
// console.log(person['name'])
// console.log(person['age'])


// TODO undefined
// undefined is something that has been created (a variable), but has not yet been defined (given a value).
// let dog;
// console.log(dog);

// Null is a value of nothing, whereas undefined is a variable that has not yet had a value set to it.

// Booleans
// let age = 18;
// const ofAge = age > 19;
// console.log(ofAge);

// '10' == 10

// age = 21;

// ==
// ===

// const mySymbol = Symbol('My Unique Name')
// const nextSymbol = Symbol('My Unique Name');

const mySymbol = Symbol('Bauyrzhan');
const nextSymbol = Symbol('Bauyrzhan');
console.log(undefined === null)

// console.log(mySymbol === nextSymbol)

// const myName = 'Bauyrzhan';
// const myLastName = 'Bauyrzhan';
// console.log(myName === myLastName)
