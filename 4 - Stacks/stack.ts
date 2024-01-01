// @ts-ignore
class Stack {
  count: number;
  items: any[];

  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element: any): void {
    this.items[this.count] = element;
    this.count++;
  }

  size(): number {
    return this.count;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  pop(): any {
    if (this.isEmpty()) {
      return null;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): null | number {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.count - 1];
  }

  clear(): void {
    this.items = [];
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    let i = 1;
    while (i < this.count) {
      objString = `${objString}, ${this.items[i]}`;
      i++;
    }
    return objString;
  }
}

// @ts-ignore
const stack = new Stack();
stack.push(5);
stack.push(8);
stack.push(11);
console.log(stack.toString()); // 5, 8, 11
console.log(stack.size()); // 3
