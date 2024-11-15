class FIFONode<T> {
    value: T;
    next: FIFONode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
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

const fifoQueue = new QueueFIFO<number>();
fifoQueue.enqueue(1);
fifoQueue.enqueue(2);
console.log(fifoQueue.dequeue());
console.log(fifoQueue.dequeue());
