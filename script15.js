// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例："abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 2) {
    // 字串一次取出兩了字元, 長度不足2則補上 "_"
    result.push(str.substr(i, 2).padEnd(2, "_"));
  }

  return result;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
