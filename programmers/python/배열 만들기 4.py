# 배열 만들기 4
def solution(arr):
    stock = []
    i = 0
    while i < len(arr):
        a = arr[i]
        if len(stock) == 0 or stock[-1] < a: 
            stock.append(a)
            i += 1
        else:
            stock.pop()
    return stock