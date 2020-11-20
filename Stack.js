const Utility = require('./Utility');
let readlineSync = require('readline-sync');
/**
 * take input from the user and push the element
 */
let element = readlineSync.question("Enter push Integer:");
Utility.push(element);
