const Utility = require('./Utility');
let readlineSync = require('readline-sync');

/** method for choose the option for push, pop and display the element */
choice = function () {
    let isTerminated = true;
    while (isTerminated == true) {
        /** take choice input from the user */
        let choice = readlineSync.question("\nEner your choice:\n1.push\n2.pop\n3.print\n4.reverse\n5.peekElement\n6.lengthElement\n7.exit\n");
        switch (choice) {
            case '1':
                let element = readlineSync.question("Enter the element:");
                Utility.push(element);
                break;
            case '2':
                Utility.pop();
                break;
            case '3':
                Utility.print();
                break;
            case '4':
                Utility.reverse();
                break;
            case '5':
                let peekElement = Utility.peek();
                console.log(peekElement);
                break;
            case '6':
                let stackLength = Utility.length();
                console.log(stackLength);
                break;
            case '7':
                isTerminated = false;
                break;
            default: console.log("please enter correct option");
        }
    }
}
choice();

