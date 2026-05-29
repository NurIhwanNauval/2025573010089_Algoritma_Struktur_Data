// 03-stack-ll.js

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Tambah di depan (O(1))
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Hapus node pertama (O(1))
    removeHead() {
        if (!this.head) return null;

        const value = this.head.data;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    // Ambil data head (O(1))
    getHead() {
        return this.head ? this.head.data : null;
    }

    print() {
        let current = this.head;
        let result = [];

        while (current) {
            result.push(current.data);
            current = current.next;
        }

        console.log(result.join(" -> "));
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    // O(1)
    push(data) {
        this.list.prepend(data);
    }

    // O(1)
    pop() {
        return this.list.removeHead();
    }

    // O(1)
    peek() {
        return this.list.getHead();
    }

    // O(1)
    isEmpty() {
        return this.list.length === 0;
    }

    // O(1)
    size() {
        return this.list.length;
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

console.log("=== PUSH ===");
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log("\n=== PEEK ===");
console.log(stack.peek());

console.log("\n=== POP ===");
console.log(stack.pop());

stack.print();

console.log("\n=== SIZE ===");
console.log(stack.size());

console.log("\n=== ISEMPTY ===");
console.log(stack.isEmpty());

console.log("\n=== SIMULASI UNDO ===");

const undoStack = new Stack();

undoStack.push("Ketik A");
undoStack.push("Ketik B");
undoStack.push("Ketik C");
undoStack.push("Hapus Karakter");
undoStack.push("Simpan File");

console.log("Isi Stack:");
undoStack.print();

console.log("\nUndo:");
console.log(undoStack.pop());

console.log("\nUndo:");
console.log(undoStack.pop());

console.log("\nSisa Stack:");
undoStack.print();

console.log("\nAksi Terakhir:");
console.log(undoStack.peek());