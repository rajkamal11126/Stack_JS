class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    /** method for push the element */
    push = (element) => {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    /** method for check stack is empty or not */
    isEmpty = () => {
        return this.top === 0;
    }
    /** method for pop the element  */
    pop = () => {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        }
    }
    /**method for display the element */
    print = () => {
        let top = this.top - 1; // because top points to index where new element to be inserted
        while (top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
    }
    /** reverse the element in the stack */
    reverse() {
       this._reverse(this.top - 1);
    }
    _reverse(index) {
        if(index != 0) {
           this._reverse(index-1);
        }
        console.log(this.data[index]);
     }
     /** method for find the peek element of queue */
     peek = () => {
        return this.data[this.top-1];
     }
}
module.exports = new Stack();