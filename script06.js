// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  const cntNum = {};

  // 計算各個數字出現的次數
  numbers.forEach(function (item) {
    cntNum[item] = (cntNum[item] || 0) + 1;
  });

  for (let num of numbers) {
    if (cntNum[num] == 1) {
      return num;
    }
  }
}

console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8
