class Stack {
    constructor() {
        this.items = [];
    }

    push(data) {
        this.items.push(data);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let char of ekspresi) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }

        if (char === ")" || char === "}" || char === "]") {
            if (stack.isEmpty()) {
                return false;
            }

            const top = stack.pop();

            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

// 5 contoh pengujian
const test = [
    "(2 + 3) * (4 - 1)",
    "((a + b)",
    ")]",
    "((()))",
    "{[()]}"
];

test.forEach(item => {
    console.log(`${item} -> Seimbang: ${cekKurungSeimbang(item)}`);
}
);