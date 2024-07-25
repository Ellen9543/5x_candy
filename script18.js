// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(start, end) {
  if (!end) {
    end = start;
    start = 0;
  }

  // random 隨機取出介於 0~1 之間的數
  // 乘上 (end - start) 後會介於 0~(end - start) 之間
  // 加上 start 後範圍為 start ~ end 之間
  return Math.floor(Math.random() * (end - start)) + start;
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
