# 編號：CANDY-010
# 程式語言：Python
# 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
# 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"


def expanded_form(num):
    arr = list(str(num))
    arr_len = len(arr)
    result = []
    for idx in range(arr_len):
        if int(arr[idx]) == 0:
            continue

        if arr_len - 1 == idx:
            calc = f"{arr[idx]}"
        else:
            calc = f"{10**(arr_len-idx-1)} x {arr[idx]}"

        result.append(calc)

    return " + ".join(result)


print(expanded_form(8))  # 印出 8
print(expanded_form(25))  # 印出 10 x 2 + 5
print(expanded_form(148))  # 印出 100 x 1 + 10 x 4 + 8
print(expanded_form(1450))  # 印出 1000 x 1 + 100 x 4 + 10 x 5
print(expanded_form(60308))  # 印出 10000 x 6 + 100 x 3 + 8
