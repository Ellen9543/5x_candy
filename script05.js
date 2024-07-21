// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  const str = String(num).split(""); // 轉換成字串並切割

  // str.forEach((val) => {
  //   result += (Number(val) ** 2).toString(); // 計算平方後轉成字串並串起來
  // });

  const result = str.map((val) => {
    return (Number(val) ** 2).toString();
  });

  return result.join("");
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449
