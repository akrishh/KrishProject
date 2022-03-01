class IndexClass {
    indexValue: string;
    constructor() {
        this.indexValue = 'index';
    }
}

class IndexSubClass extends IndexClass {
    constructor() {
        super();
        console.log(this.indexValue);
    }
}

const derivedClass = new IndexSubClass();