'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
    let newTable = str.split(" ");
    for (let i=0; i < newTable.length; i++){
        newTable[i] = newTable[i].charAt(0).toUpperCase() + newTable[i].substring(1);
    }
    return newTable.join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase("How are you ?"),"How Are You ?")
// End of tests */
