# 編號：CANDY-003
# 程式語言：Python
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

list1 = [False, 1, 0, -1, 2, 0, 1, 3, "a"]


def move_zeros_to_end(arr):
    zero = [n for n in arr if n is 0]
    other = [n for n in arr if n is not 0]

    return other + zero


result = move_zeros_to_end(list1)
print(result)  # 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]
