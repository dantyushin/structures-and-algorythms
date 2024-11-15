class MyNodeForLIFO<T> {
  constructor(public value: T, public next: MyNodeForLIFO<T> | null = null) {}
}

class StackLIFO<T> {
  private top: MyNodeForLIFO<T> | null = null;
  private _size: number = 0;

  push(item: T): void {
    const node = new MyNodeForLIFO(item);
    node.next = this.top;
    this.top = node;
    this._size++;
  }

  pop(): T | undefined {
    if (this.top === null) return undefined;

    const value = this.top.value;
    this.top = this.top.next;
    this._size--;
    return value;
  }

  peek(): T | undefined {
    return this.top ? this.top.value : undefined;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  size(): number {
    return this._size;
  }
}

const lfs = new StackLIFO<number>();
console.log(lfs.isEmpty());
console.log(lfs.size());
console.log(lfs.peek());
lfs.push(1);
console.log(lfs.isEmpty());
lfs.push(2);
console.log(lfs.pop());
console.log(lfs.peek());
console.log(lfs.pop());
console.log(lfs.peek());
console.log(lfs.isEmpty());
