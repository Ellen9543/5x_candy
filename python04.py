# 編號：CANDY-004
# 程式語言：Python
# 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式


def human_readable_timer(seconds):
    hour = seconds // 3600  # 計算小時 60*60
    minute = (seconds % 3600) // 60  # 剩下的秒數計算成分鐘
    second = seconds % 60  # 不足一分鐘的就是秒數

    return f"{hour:02}:{minute:02}:{second:02}"


print(human_readable_timer(0))  # 印出 00:00:00
print(human_readable_timer(59))  # 印出 00:00:59
print(human_readable_timer(60))  # 印出 00:01:00
print(human_readable_timer(90))  # 印出 00:01:30
print(human_readable_timer(3599))  # 印出 00:59:59
print(human_readable_timer(3600))  # 印出 01:00:00
print(human_readable_timer(45296))  # 印出 12:34:56
print(human_readable_timer(86399))  # 印出 23:59:59
print(human_readable_timer(86400))  # 印出 24:00:00
print(human_readable_timer(359999))  # 印出 99:59:59
