# 編號：CANDY-013
# 程式語言：Python
# 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
# https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283


def isValid_vat_number(vat):
    NUM = [1, 2, 1, 2, 1, 2, 4, 1]  # 邏輯乘數
    total = 0
    for i in range(len(vat)):
        num = int(vat[i]) * NUM[i]
        total += num // 10 + num % 10

    if 7 == vat[6]:
        return total % 5 == 0 or total % 5 == 1

    return total % 5 == 0


print(isValid_vat_number("04595257"))  # true
print(isValid_vat_number("10458575"))  # true
print(isValid_vat_number("88117125"))  # true
print(isValid_vat_number("53212539"))  # true
print(isValid_vat_number("88117126"))  # false
