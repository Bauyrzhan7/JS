'use strict';

/*
    1. Variables
    2. Statements
    3. Code Blocks (automatic semi-colon insertion)

    4. Differences between var, let & const

         var first = "wes";
         let age = 300;
         const cool = true;

     5. use strict
     6. Scoping
        Will deep dive

            var variables are scoped differently than let and const variables.
            var variables are what we refer to as function scoped variables (they are only available within the parent function).
            let and const variables are what we refer to as block scoped variables.

        var - let and const were introduced as part of what is called es6, which is only a couple of years old. var has been around since JavaScript was invented.
     7. Naming Conventions
        Variables must start with either a letter (a,b,c,D,X, etc).
        They can also start with or contain an underscore _ or dollar sign $.
        They can also contain but may not start with a number.

        const $$$$$$$$ = 100; => OK
        const Dog = "bowser"; => Not Ok

        // camel case
        const iLovePizza = true;
        // UpperCamelCase
        const ILoveToEatHotDogs = false;
        // snake case
        const this_is_snake_case = "cool";
        Kebab Case - Not Allowed
        const this-is-kebab-case; => Not Ok

      8. Code Quality Tooling with Prettier and ESLint
        There are two tools that are extremely helpful in code quality and formatting of your JavaScript:
        1. ESLint - https://eslint.org/
        2. Prettier - https://prettier.io/

        Install
            npm init @eslint/config
            ESLint Plugin for VsCode

       9.

    Debug Code
    console.log("%cThis is a green text", "color:green");
 */

// 'use strict'
// let first = 'Nico';
// let age = 300;
// const cool = true;
//
// if (age > 10) {
//     console.log("\x1b[36m", "you are old");
// }
// dog = "snickers";
//
// console.log(dog)

// let first = 'Nico';
// var second = 'Second';
// const third = 'Third';
//
// let age;
// const name;
//
//
// // first = 'Nico 2';
// // third = 'nco'
//
// age = 10;
//
// name = '100'
// console.log("\x1b[36m", first);

// const user = 'Me';
// const this-is-kebab-case = ''

// const #myPrivateVariable = '';

// ['striong', 'sss'].forEach((_, index) => {
//     console.log(index)
// })

// class User {
//     #token;
//     test;
// }
//
// const user = new User();
// user.test

// let dog;
//
// dog = 'Avav';
//
// console.log(dog);

// function sayHi() {
//     console.log('hi')
// }

// function hello() {
//     let userName = 'Nico';
//     let result = `Your name is ${userName}`;
//     sayHi()
//     // const table = [
//     //     {
//     //         name: 'nico',
//     //         id: 1
//     //     }
//     // ]
//     // console.table(table)
//     // console.dir(document.getElementById('love'));
//     // debugger;
//     console.log("%cThis is a green text", "color:green;");
//     const age = 100;
//     const user = 'Nico';
// }
//
// hello()

// function hello() {
//     let userName = 'Nico';
//     let result = 'Your name is ${userName}';
//     console.log(userName)
//     console.log(result)
//     console.error(result)
//     console.warn(result)
//     console.table(result)
    
//     const table = [
//         {
//             name: 'nico',
//             id: 1
//         }
//     ]
//     console.table(table)
//     console.dir(document.getElementById('love'));
//     debugger;
//     console.log("%cThis is green", "color: green")
//     const age = 100;
//     const user = 'Nico';
// }

// hello()

