// 編號：CANDY-024
// 程式語言：JavaScript
// 題目：算出 N 個數字的最小公倍數
// 提示：可使用 023 計算最大公因數的函數

function calcLCM(...numbers) {
  function lcm(a, b) {
    const multiplyNum = a * b;
    while (b != 0) {
      [a, b] = [b, a % b];
    }

    return multiplyNum / a;
  }

  // 最小公倍數公式 a*b / gcd(a,b)
  return numbers.reduce((acc, num) => lcm(acc, num));
}

console.log(calcLCM(10)); // 10
console.log(calcLCM(103, 27)); // 2781
console.log(calcLCM(21, 15, 18)); // 630
console.log(calcLCM(104, 96, 36, 88)); // 41184
