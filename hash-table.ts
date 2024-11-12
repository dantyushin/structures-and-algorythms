class ListNode<T> {
  key: string;
  value: T;
  next: ListNode<T> | null = null;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}

class HashTable<T> {
  private table: Array<ListNode<T> | null>;
  private size: number;

  constructor(size: number = 16) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  private hash(key: string): number {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }

  set(key: string, value: T): void {
    const index = this.hash(key);
    let head = this.table[index];

    while (head !== null) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    const newNode = new ListNode(key, value);
    newNode.next = this.table[index];
    this.table[index] = newNode;
  }

  get(key: string): T | null {
    const index = this.hash(key);
    let head = this.table[index];

    while (head !== null) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }
    return null;
  }

  delete(key: string): boolean {
    const index = this.hash(key);
    let head = this.table[index];
    let prev: ListNode<T> | null = null;

    while (head !== null) {
      if (head.key === key) {
        if (prev === null) {
          this.table[index] = head.next;
        } else {
          prev.next = head.next;
        }
        return true;
      }
      prev = head;
      head = head.next;
    }
    return false;
  }
}

const hashTable = new HashTable<string>();
hashTable.set("name", "Dmitrii");
hashTable.set("name", "Dmitriy");
hashTable.set("amen", "Dima");
hashTable.set("age", "23");
console.log(hashTable.get("name"));
console.log(hashTable.get("age"));
hashTable.delete("name");
hashTable.delete("name");
console.log(hashTable.get("name"));
