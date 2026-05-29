class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// ==========================
// 1. Cek Palindrome Linked List
// Big O: O(n)
// ==========================
function palindromLL(head) {
    let arr = [];

    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// ==========================
// 2. Hapus Node ke-n dari Akhir
// Big O: O(n)
// ==========================
function hapusNariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

// ==========================
// 3. Cari Node Tengah
// Jika genap -> node tengah kedua
// Big O: O(n)
// ==========================
function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// ==========================
// Helper
// ==========================
function createList(arr) {
    if (arr.length === 0) return null;

    const head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let result = [];
    let current = head;

    while (current) {
        result.push(current.value);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// ==========================
// TEST PALINDROME (3 kasus)
// ==========================
console.log("=== PALINDROME ===");

console.log(
    palindromLL(createList([1, 2, 3, 2, 1]))
); // true

console.log(
    palindromLL(createList([1, 2, 2, 1]))
); // true

console.log(
    palindromLL(createList([1, 2, 3]))
); // false


// ==========================
// TEST HAPUS N DARI AKHIR
// ==========================
console.log("\n=== HAPUS N DARI AKHIR ===");

let list1 = createList([1, 2, 3, 4, 5]);
printList(hapusNariAkhir(list1, 2));
// 1 -> 2 -> 3 -> 5

let list2 = createList([10, 20, 30]);
printList(hapusNariAkhir(list2, 1));
// 10 -> 20

let list3 = createList([7, 8, 9, 10]);
printList(hapusNariAkhir(list3, 4));
// 8 -> 9 -> 10


// ==========================
// TEST NODE TENGAH
// ==========================
console.log("\n=== NODE TENGAH ===");

console.log(
    tengahLinkedList(createList([1, 2, 3, 4, 5])).value
);
// 3

console.log(
    tengahLinkedList(createList([1, 2, 3, 4, 5, 6])).value
);
// 4 (tengah kedua)

console.log(
    tengahLinkedList(createList([10, 20, 30])).value
);
// 20