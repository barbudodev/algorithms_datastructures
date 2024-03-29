class Stack {
  private items: any[] = [];

  push(element: any) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // outputs true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // outputs 8

stack.push(11);
console.log(stack.size()); // outputs 3
console.log(stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size()); // outputs 2
