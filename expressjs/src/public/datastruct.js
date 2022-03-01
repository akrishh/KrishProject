const inputArray = new Array(11, 3, 5, 7, 9, 18);
class SubArraySoln {
  constructor() {}
  findSubSum(arr, sum) {
    let start = 0,
      n = arr.length,
      i = 0,
      curr_sum = arr[i];
    for (i = 1; i <= n; i++) {
      while (curr_sum > sum && start < i - 1) {
        curr_sum = curr_sum - arr[start];
        start++;
      }
      if (curr_sum === sum) return `found >> ${start} ${i - 1}`;
      curr_sum += arr[i];
    }
    return "no values found";
  }
}
// const soln = new SubArraySoln();
// console.log(soln.findSubSum(inputArray, 16));

class PrintPat {
  constructor() {}
  printPat(n) {
    let res = "";
    for (let i = n; i > 0; i--) {
      for (let j = n; j > 0; j--) {
        for (let k = i; k > 0; k--) {
          res += j + " ";
        }
      }
      res += "\n";
    }
    console.log(res);
  }
}

// const p = new PrintPat();
// p.printPat(4);

class DayFinder {
  constructor() {
    this.days = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  }

  findDay(m, d, y) {
    let ddate = new Date(m + "/" + d + "/" + y),
      dday = ddate.getDay();
    // console.log('>>> ', ddate, ' >>> dday >>> ', dday, ' >>> ', this.days[dday]);
    console.log(this.days[dday]);
  }
}

// const df = new DayFinder();
// let m = "12",
//     d = "10",
//     y = "1984";
// df.findDay(m, d, y);

class SquaresInMatrix {
  constructor() {}
  find(h, v) {
    let squares = h * v;
    for (let i = 0; i < h; i++) {
      squares = squares + this.getSquareCount(h, v);
    }
    return squares;
  }

  getSquareCount(h, v) {
    let val = h === v ? h / 2 : 1;
    return "";
  }
}

// const matrix = new SquaresInMatrix();
// console.log(matrix.find(3, 3));

// const buffer = new ArrayBuffer(8);
// const view = new Int32Array(buffer);

// console.log(view);
