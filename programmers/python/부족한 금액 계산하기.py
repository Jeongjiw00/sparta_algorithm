# 부족한 금액 계산하기
def solution(price, money, count):
    pay = 0
    for i in range(1, count+1):
        pay += (price * i)
    if money < pay:
        return pay - money
    else:
        return 0
    
def solution(price, money, count):
    return max(0, price * (count + 1) * count // 2 - money)