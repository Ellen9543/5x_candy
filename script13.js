// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const arr = vat.split("");
  const NUM = [1, 2, 1, 2, 1, 2, 4, 1]; // 邏輯乘數

  const result = arr.reduce((sum, ele, idx) => {
    const num = ele * NUM[idx]; // 兩數上下對應相乘
    return (sum += (num % 10) + Math.floor(num / 10)); // 乘積數字加總
  }, 0);

  if (7 == arr[6]) {
    return result % 5 == 0 || result % 5 == 1;
  }
  return result % 5 == 0;
}

console.log(isValidVatNumber("04595257")); // true
console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
