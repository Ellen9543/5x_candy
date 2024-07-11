// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const zero = [];
  const other = [];

  list.forEach((val) => {
    if (val === 0) {
      zero.push(val); // 放 0
    } else {
      other.push(val); // 放 不是0
    }
  });

  return other.concat(zero);
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
