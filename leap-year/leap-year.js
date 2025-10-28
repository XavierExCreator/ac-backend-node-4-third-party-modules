/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

//ES Module syntax
// import fs from "fs/promises";

import moment from "moment";


async function isItALeapYear() {

let year = Number(process.argv[2]);
const question = moment([year]).isLeapYear(); // True or False
console.log(question)
console.log(year)
if (question === true && year === Number(year)) {
    console.log(`${year} is a leap year!`);
} else if (question === false && year === Number(year)) {
    console.log(`${year} is not a leap year!`);
} else {
    console.log(`Is this there a letter? Is this a valid year? Please input a valid year that's been logged and make sure there's no letters when inputting the year. Thank you!`);
}
}

// const secondQuestion = moment([process.argv[3]]).isLeapYear(); // false
// console.log("Is 2001 a leap year?",secondQuestion);

// const thirdQuestion = moment([process.argv[4]]).isLeapYear(); // false
// console.log("Is 2100 a leap year?",thirdQuestion)

isItALeapYear();