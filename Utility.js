class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    /**method for push the element */
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
}
module.exports = new Stack();