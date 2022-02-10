class Node {
    constructor(el) {
        this.element = el;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(el) {
        var node = new Node(el);
        var current;



        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            console.log('current >>>', current);
            while (current.next !== null) {
                current = current.next;
            }

            current.next = node;

        }

        this.size++;
        console.log(node, this);


    }
}


const ll = new LinkedList();
ll.add(1111);
ll.add(222);
ll.add(333);
console.log('ll >> ', ll);


class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendants = [];
    }
}

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');
const g = new TreeNode('g');

const createTree = () => {
    a.descendants.push(b);
    b.descendants.push(c);
    c.descendants.push(d);
    d.descendants.push(e, f, g);
    console.log(a);
}

createTree();


const LEFT = 0;

const RIGHT = 1;

class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.descendants = [];
        this.parent = null;
    }

    get left() {
        return this.descendants[LEFT];
    }

    get right() {
        return this.descendants[RIGHT];
    }

    set left(node) {
        this.descendants[LEFT] = node;
        if (node) {
            node.parent = this;
        }
    }

    set right(node) {
        this.descendants[RIGHT] = node;
        if (node) {
            node.parent = this;
        }
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value) {
        var node = new TreeNode2(value);

    }
}


class HashTable {
    constructor() {
        this.table = new Array(500);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                // Find the index Key
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
                this.table[index].push([key, value]);

            }

        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }
}

const ht = new HashTable();

ht.set('USA', 200);
ht.set('Canada', 300);

console.log('Hash Table', ht.get('USA'));


class PromiseExperiment {
    constructor() {}

    experiment() {
        console.log('===================== experiment called ==================');
        const arr1 = new Array(1, 2, 3, 4);
        const reducer = (a, b) => a * b;
        console.log('arr1 >>', arr1.reduce(reducer));
        let idx = 1;
        console.log(`This is a sample ${arr1.at(idx)}`);
        console.log(arr1);
        console.log(Array.of(1, 2, 3));
        const isBelowThreshold = (value) => value < 2;
        console.log(arr1.every(isBelowThreshold));

        const myPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve('promise captured');
            }, 1000);
        });

        myPromise.then(result => {
            console.log('promise: ', result);
        });


    }
}

const promiseExperiment = new PromiseExperiment();

// promiseExperiment.experiment();


class Stack {
    constructor(str) {
        this.string = str;
    }

    reverseString() {
        const inputString = this.string;
        const stackArr = new Array();
        for (let i = 0; i < inputString.length; i++) {
            stackArr.push(inputString[i]);
        }

        let reverStr = '';
        while (stackArr.length > 0) {
            reverStr += stackArr.pop();
        }

        return reverStr;
    }
}

const stackObj = new Stack('JavaScript');
console.log(`Original String is 'JavaScript' >>> ${stackObj.reverseString()}`);

class Queue {
    constructor() {
        this.queue = new Array();
    }

    addQueue(q) {
        this.queue.push(q);
    }

    removeQueue() {
        this.queue.shift();
    }
}

const q = new Queue();
q.addQueue(3)
q.addQueue(4);
q.addQueue(8);
q.removeQueue();
console.log(q);