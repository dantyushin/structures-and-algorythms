class CircularNode<T> {
  constructor(
    public data: T,
    public next: CircularNode<T> | null = null,
    public prev: CircularNode<T> | null = null
  ) {}
}

class CircularList<T> {
  private head: CircularNode<T> | null = null;
  private size: number = 0;

  add(data: T): void {
    const newNode = new CircularNode(data);
    if (!this.head) {
      newNode.next = newNode;
      newNode.prev = newNode;
      this.head = newNode;
    } else {
      const tail = this.head.prev as CircularNode<T>;

      tail.next = newNode;
      newNode.prev = tail;

      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.size++;
  }

  addAtHead(data: T): void {
    this.add(data);
    this.head = this.head?.prev || null;
  }

  delete(data: T): boolean {
    if (!this.head) return false;

    let current = this.head;
    let deleted = false;

    do {
      if (current.data === data) {
        if (this.size === 1) {
          this.head = null;
        } else {
          const prevNode = current.prev as CircularNode<T>;
          const nextNode = current.next as CircularNode<T>;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;

          if (current === this.head) {
            this.head = nextNode;
          }
        }
        this.size--;
        deleted = true;
        break;
      }
      current = current.next as CircularNode<T>;
    } while (current !== this.head);

    return deleted;
  }

  print(): void {
    if (!this.head) return;

    let current = this.head;
    do {
      console.log(current.data);
      current = current.next as CircularNode<T>;
    } while (current !== this.head);
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}

const cl = new CircularList<number>();
cl.delete(2);
cl.add(1);
cl.add(2);
cl.delete(3);
cl.add(3);
cl.addAtHead(0);
cl.addAtHead(-1);
cl.delete(2);
cl.delete(4);
cl.print();
console.log(cl.getSize());
