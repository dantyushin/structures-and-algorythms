class TwoLinkedNode<T> {
    constructor(
        public data: T,
        public next: TwoLinkedNode<T> | null = null,
        public prev: TwoLinkedNode<T> | null = null
    ) {}
}

class TwoLinkedList<T> {
    public head: TwoLinkedNode<T> | null = null;
    public tail: TwoLinkedNode<T> | null = null;

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    addAtTail(data: any) {
        const newnode = new TwoLinkedNode(data, null, this.tail);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            this.tail!.next = newnode;
            this.tail = newnode;
        }
    }

    addAtHead(data: any) {
        const newnode = new TwoLinkedNode(data, this.head, null);
        if (!this.head) {
            this.head = newnode;
            this.tail = newnode;
        } else {
            this.head.prev = newnode;
            this.head = newnode;
        }
    }

    delete(data: any, deleteAllSame: boolean = false) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail!.next = null;
                } else {
                    current.prev!.next = current.next;
                    current.next!.prev = current.prev;
                }
                if (!deleteAllSame) return;
            }
            current = current.next as TwoLinkedNode<T>;
        }
    }
}

const tll = new TwoLinkedList();
tll.addAtHead(0);
tll.addAtTail(1);
tll.addAtTail(2);
tll.delete(2);
tll.addAtTail(3);
tll.delete(3);
tll.addAtTail(4);
tll.delete(4);
tll.addAtHead(1);
tll.addAtHead(2);
tll.addAtHead(0);
tll.delete(0, true);
tll.print();
