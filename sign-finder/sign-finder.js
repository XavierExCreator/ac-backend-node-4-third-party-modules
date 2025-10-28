/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

import horoscope from "horoscope";

function findZodiacSign() {

    let usersMonthAndDate = horoscope.getSign({month: Number(process.argv[2]), day: Number(process.argv[3]) })
    
    let usersYear = horoscope.getZodiac(Number(process.argv[4]))

    if(usersMonthAndDate) {
        console.log(`Your astrological sign is ${usersMonthAndDate} and your zodiac sign is ${usersYear}`)
    } else {
        console.log("System has not caught the error, somethine else is wrong");
    }
}

findZodiacSign();