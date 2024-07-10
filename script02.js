// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元
// 提示：
// 可使用字串的 charCodeAt 方法...
const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  // 字串轉為 Unicode
  const charCode = chars.map((str) => {
    return str.charCodeAt(0);
  });

  for (let i = 0; i < charCode.length; i++) {
    if (charCode[i] + 1 !== charCode[i + 1]) {
      // 若當下的數字+1 不等於 下一個數字 表示不連續
      return String.fromCharCode(charCode[i] + 1); // Unicode 轉回字串
    }
  }
}

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P
