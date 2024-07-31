# 編號：CANDY-006
# 程式語言：Python
# 題目：找出在數字陣列裡跟其它元素不一樣的值


def find_different(numbers):
    text = [str(n) for n in numbers]

    for val in text:
        if text.count(val) == 1:
            return val


print(find_different([1, 1, 1, 1, 3, 1, 1, 1]))  # 3
print(find_different([2, 2, 2, 4, 2, 2]))  # 4
print(find_different([8, 3, 3, 3, 3, 3, 3, 3]))  # 8
