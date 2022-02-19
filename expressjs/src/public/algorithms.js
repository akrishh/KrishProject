class Sorter {
    constructor() {}

    bubbleSort(arr, p) {
        const [...outarr] = arr;
        const len = outarr.length;
        let isSwapped = false;
        let prop;
        if (typeof p !== undefined)
            prop = p;

        for (let i = 0; i < len - 1; i++) {
            for (let j = 0; j < len - i - 1; j++) { // reduced the iteration counts
                if (prop) {
                    if (prop === 'date') {
                        if (new Date(outarr[j].date) > new Date(outarr[j + 1].date)) {
                            [outarr[j], outarr[j + 1]] = [outarr[j + 1], outarr[j]];
                            isSwapped = true; // assign the flag when swapped
                        }
                    } else if (prop === 'name') {
                        if (outarr[j].name > outarr[j + 1].name) {
                            [outarr[j], outarr[j + 1]] = [outarr[j + 1], outarr[j]];
                            isSwapped = true; // assign the flag when swapped
                        }
                    } else if (prop === 'location') {
                        if (outarr[j].location > outarr[j + 1].location) {
                            [outarr[j], outarr[j + 1]] = [outarr[j + 1], outarr[j]];
                            isSwapped = true; // assign the flag when swapped
                        }
                    }
                } else {
                    if (outarr[j] > outarr[j + 1]) { // swap the elements
                        [outarr[j], outarr[j + 1]] = [outarr[j + 1], outarr[j]]
                        isSwapped = true; // assign the flag when swapped
                    }
                }
            }
            if (!isSwapped) // if not swapped then break the loop
                break;
        }
        return outarr;
    }

    selectionSort(arr) {
        const [...outarr] = arr;
        const len = outarr.length;
        for (let i = 0; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                if (outarr[j] < outarr[i])
                    [outarr[i], outarr[j]] = [outarr[j], outarr[i]];
            }
        }
        return outarr;
    }

    insertionSort(arr) {
        const [...outarr] = arr;
        const len = outarr.length;
        for (let i = 1; i < len; i++) {
            let current = outarr[i];
            let j = i - 1;
            while (j >= 0 && outarr[j] > current) {
                outarr[j + 1] = outarr[j];
                j--;
            }
            outarr[j + 1] = current;
        }
        return outarr;
    }

    mergeSort(arr) {
        // const [...outarr] = arr;
        const len = arr.length;
        if (len === 1)
            return arr;
        // get the mid of the array
        const mid = Math.floor(len / 2);
        // get the left sub array
        const left = arr.slice(0, mid);
        //get the right sub array
        const right = arr.slice(mid, len);
        return this.subMerge(this.mergeSort(left), this.mergeSort(right));
    }

    subMerge(l, r) {
        // to merge both subarrays
        const result = [];
        let iL = 0; // To track left sub array
        let iR = 0; // To track right sub array
        while (iL < l.length && iR < r.length) {
            if (l[iL] < r[iR]) {
                result.push(l[iL]);
                // console.log(`l >> ${result}`);
                iL++;
            } else {
                result.push(r[iR]);
                // console.log(`r >> ${result}`);
                iR++;
            }
        }
        while (iL < l.length) {
            result.push(l[iL]);
            iL++;
        }
        while (iR < r.length) {
            result.push(r[iR]);
            iR++;
        }
        // console.log(`result >> ${result}`);
        return result;
    }

    quickSort(arr) {
        const [...outarr] = arr;
        const len = outarr.length;
        // get the mid of the array
        const mid = Math.floor(len / 2);
        const pivotFindArr = new Array(0, mid, (len - 1));

        for (let i = 0; i < pivotFindArr.length; i++) {
            for (let j = 0; j < pivotFindArr.length; j++) {
                if (i !== j) {
                    console.log(i, j)
                    this.swap(outarr, i, j);
                }
            }
        }

        console.log('outarr >>>', outarr);
        // console.log(this.swap(outarr, 0, mid));
        // console.log(this.swap(outarr, mid, (len - 1)));
        // console.log(this.swap(outarr, 0, (len - 1)));

    }

    swap(arr, l, r) {
        if (arr[l] > arr[r]) {
            let temp = arr[r];
            arr[r] = arr[l];
            arr[l] = temp;
        }
        return arr;
    }

}

const sorter = new Sorter();

const inputData = [{
    name: 'Image1',
    location: 'USA',
    date: '02/04/2022'
}, {
    name: 'Image2',
    location: 'India',
    date: '06/30/2010'
}, {
    name: 'Image3',
    location: 'Asia',
    date: '06/15/2014'
}];

console.log('========== ALGORITHM ============');
const inputArray = new Array(4, 3, 5, 8, 6, -2, 2, 0, 1);
console.log(`Input : ${inputArray}`);
// console.log(`Bubble Sort Output : ${sorter.bubbleSort(inputArray)}`);
// console.log(`Selection Sort Output : ${sorter.selectionSort(inputArray)}`);
// console.log(sorter.bubbleSort(inputData, 'location'));
// console.log(`Insertion Sort Output : ${sorter.insertionSort(inputArray)}`);
// console.log(`Merge Sort Output : ${sorter.mergeSort(inputArray)}`);
console.log(`Quick Sort Output : ${sorter.quickSort(inputArray)}`);
console.log('========== ALGORITHM ============');

// sorter.bubbleSortObj(inputData);