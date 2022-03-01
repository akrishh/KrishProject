let str = "stringToConvert";
let str1 = '{"name": "stringToConvert1"}';

class StringClass {
  constructor() {}

  func1(p) {
    return p
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }
}

const strObj = new StringClass();

console.log(`output >>> ${strObj.func1(str)}`);
