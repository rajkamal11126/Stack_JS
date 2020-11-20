class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    /**method for push the element */
    push = (element) => {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    isEmpty = () => {
        return this.top === 0;
    }
    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        }
    }
}
module.exports = new Stack();