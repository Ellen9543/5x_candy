# 編號：CANDY-008
# 程式語言：Python
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。
from functools import reduce


def highest_score_word(input):
    result = ""
    max_score = 0
    arr = input.split(" ")  # 用空格切割成單字

    for val in arr:
        # 累計單字的分數; 96 = "a" unicode 97 - 1
        score = reduce(lambda x, y: ord(y) - 96 + x, list(val), 0)
        if score > max_score:
            max_score = score
            result = val

    return result


print(highest_score_word("lorem ipsum dolor sit amet"))  # 印出 ipsum
print(highest_score_word("heyn i need a rubygem up to build this"))  # 印出 rubygem
print(highest_score_word("in time machine there are some bugs"))  # 印出 there
