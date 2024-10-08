# 編號：CANDY-002
# 程式語言：Python
# 題目：請寫一小段程式，印出連續陣列裡缺少的字元
chars1 = ["a", "b", "c", "d", "f", "g"]
chars2 = ["O", "Q", "R", "S"]


def missing_char(chars):
    # 字串轉為 Unicode
    char_code = [ord(n) for n in chars]

    for i in range(len(char_code)):
        # 若當下的數字+1 不等於 下一個數字 表示不連續
        if char_code[i] + 1 != char_code[i + 1]:
            return chr(char_code[i] + 1)  # Unicode 轉回字串


print(missing_char(chars1))  # 印出 e
print(missing_char(chars2))  # 印出 P
