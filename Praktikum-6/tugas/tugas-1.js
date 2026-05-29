class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // akses node terakhir O(1)
        this.length = 0;
    }

    // O(1)
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    // O(1)
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // O(n)
    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Index tidak valid");
            return;
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.length) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.prev = current.prev;
        newNode.next = current;

        current.prev.next = newNode;
        current.prev = newNode;

        this.length++;
    }

    // O(n)
    delete(value) {
        if (!this.head) return;

        let current = this.head;

        while (current && current.value !== value) {
            current = current.next;
        }

        if (!current) return;

        // jika head
        if (current === this.head) {
            this.head = this.head.next;

            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        }
        // jika tail
        else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        // node tengah
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.length--;
    }

    // O(n)
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // O(n)
    print() {
        let current = this.head;
        let forward = [];

        while (current) {
            forward.push(current.value);
            current = current.next;
        }

        console.log("Forward :", forward.join(" <-> "));

        current = this.tail;
        let backward = [];

        while (current) {
            backward.push(current.value);
            current = current.prev;
        }

        console.log("Backward:", backward.join(" <-> "));
    }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);

dll.prepend(5);

dll.insertAt(2, 15);

console.log("Setelah insert:");
dll.print();

dll.delete(20);

console.log("\nSetelah delete 20:");
dll.print();

dll.reverse();

console.log("\nSetelah reverse:");
dll.print();