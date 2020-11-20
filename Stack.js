const Utility = require('./Utility');
let readlineSync = require('readline-sync');

/** method for choose the option for push, pop and display the element */
choice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        /** take choice input from the user */
        let choice = readlineSync.question("\nEner your choice:\n1.push\n2.pop\n3.print\n4.exit\n");
        switch (choice) {
            case '1': let element = readlineSync.question("Enter the element:");
                Utility.push(element);
                break;
            case '2': Utility.pop();
                break;
            case '3': Utility.print();
                break;    
            case '4': isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
choice();

