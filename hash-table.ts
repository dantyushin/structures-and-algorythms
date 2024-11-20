class ListNode<T> {
  constructor(
    public key: string,
    public value: T,
    public next: ListNode<T> | null = null
  ) {}
}

class HashTable<T> {
  constructor(
    private size: number = 16,
    private table: Array<ListNode<T> | null> = new Array(size).fill(null)
  ) {}

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

const simpleHashTable: { [key: string]: any } = {
  set(key: any, value: any) {
    const index = JSON.stringify(key);
    this[index] = value;
  },

  get(key: any) {
    const index = JSON.stringify(key);
    return this[index];
  },

  delete(key: any) {
    const index = JSON.stringify(key);
    if (this[index]) delete this[index];
  },
};
simpleHashTable.set({ name: 123 }, { value: 321 });
simpleHashTable.set({ name: 13 }, { value: 31 });
console.log(simpleHashTable.get({ name: 123 }));
console.log(simpleHashTable.get({ name: 13 }));
simpleHashTable.delete({ name: 13 });
console.log(simpleHashTable.get({ name: 13 }));
