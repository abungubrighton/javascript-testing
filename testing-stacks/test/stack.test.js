class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    };
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const poppedItem = this.items[this.top];
        delete this.items[this.top];
        this.top -= 1;
        return poppedItem;
    }

    isEmpty() {
        return this.top === -1;
    }

};
describe("My Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });
    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top of the stack', () => {
        stack.push("hello");
        expect(stack.top).toBe(0);
        expect(stack.peek).toEqual("hello");
    });

    it("can pop from the top of the stack", () => {
        stack.push("hello");
        stack.push("world");
        expect(stack.pop()).toEqual("world");
        expect(stack.pop()).toEqual("hello");
        expect(stack.pop()).toBeUndefined();
    });

});