class BubbleSort {
    constructor(arr) {
        this.arr = arr;
    }

    bSort() {
        let thisArray = this.arr;
        let len = thisArray.length;

        let swapped = false;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (thisArray[j] > thisArray[j + 1]) {
                    let temp = thisArray[j];
                    thisArray[j] = thisArray[j + 1];
                    thisArray[j + 1] = temp;
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return thisArray;
    }
}

const inputArray = new Array(4, 3, 5, 8, 6, 7, 2, 0, 1);
console.log('========== ALGORITHM ============');
console.log('========== BUBBLE SORT ============');
console.log(`Input : ${inputArray}`);
console.log('========== ALGORITHM ============');
const bSortObj = new BubbleSort(inputArray);
bSortObj.bSort();
console.log(`Output : ${bSortObj.bSort()}`);