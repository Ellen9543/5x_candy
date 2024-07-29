// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因數

function calcGCD(...numbers) {
  function gcd(a, b) {
    while (b !== 0) {
      // 最大公因數公式: gcd(a,b) = gcd(b, a%b)
      [a, b] = [b, a % b];
    }

    return a;
  }

  return numbers.reduce((acc, num) => {
    return gcd(acc, num);
  });
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
