// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  const result = { seconds: 0, minutes: 0, hours: 0 };

  for (var key in result) {
    let times;
    if (key == "hours") {
      times = seconds;
    } else {
      times = seconds % 60;
    }

    result[key] = String(times).padStart(2, "0"); // 補齊兩位數
    seconds = parseInt(seconds / 60);
  }

  return `${result["hours"]}:${result["minutes"]}:${result["seconds"]}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59
