class FIFONode<T> {
  constructor(public value: T, public next: FIFONode<T> | null = null) {}
}

class QueueFIFO<T> {
  private head: FIFONode<T> | null = null;
  private tail: FIFONode<T> | null = null;
  private _size: number = 0;

  enqueue(item: T): void {
    const node = new FIFONode(item);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this._size++;
  }

  dequeue(): T | undefined {
    if (this.head === null) return undefined;

    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this._size--;
    return value;
  }

  peek(): T | undefined {
    return this.head ? this.head.value : undefined;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  size(): number {
    return this._size;
  }
}

const ffq = new QueueFIFO<number>();
console.log(ffq.size());
console.log(ffq.isEmpty());
ffq.enqueue(1);
console.log(ffq.peek());
ffq.enqueue(2);
console.log(ffq.isEmpty());
console.log(ffq.size());
ffq.enqueue(3);
console.log(ffq.dequeue());
console.log(ffq.dequeue());
console.log(ffq.dequeue());
console.log(ffq.isEmpty());
console.log(ffq.size());
