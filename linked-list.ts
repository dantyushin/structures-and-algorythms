class MyNodeForLinkedList {
    constructor(
        public data: any,
        public next: MyNodeForLinkedList | null
    ) {}
}

class LinkedList {
    constructor(
        public head: MyNodeForLinkedList | null = null,
        public tail: MyNodeForLinkedList | null = null
    ) {}

    addAtTail(data: any) {
        const newnode = new MyNodeForLinkedList(data, null);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            this.tail!.next = newnode;
            this.tail = newnode;
        }
    }

    addAtHead(data: any) {
        const newnode = new MyNodeForLinkedList(data, this.head);
        if (!this.head) {
          this.head = newnode;
          this.tail = newnode;
        }
        this.head = newnode;
    }

    delete(data: any) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    find(data: any) {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        while (current.next) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    print() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.next) {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data)
    }
}

const ll = new LinkedList();

ll.addAtHead(0)
ll.addAtTail(1)
ll.addAtHead(-2)
ll.addAtTail(2)
ll.delete(-2)
ll.addAtTail(3)
ll.delete(1)
ll.addAtHead(-1)
ll.delete(2)
ll.delete(3)
ll.print()