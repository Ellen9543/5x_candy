// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  let result = "",
    maxScore = 0;
  const arr = input.split(" "); // 用空格切割成單字

  arr.forEach(function (val) {
    const str = val.split(""); // 單字切割成字母

    const score = str.reduce(function (sum, s) {
      return (sum += s.charCodeAt(0) - 96); // 累計單字的分數; 96 = "a" unicode 97 - 1
    }, 0);

    if (score > maxScore) {
      maxScore = score;
      result = val;
    }
  });

  return result;
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there
