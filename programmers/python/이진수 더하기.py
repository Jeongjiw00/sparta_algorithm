# 이진수 더하기
def solution(bin1, bin2):
    ans = int(bin1,2) +int(bin2,2)
    answer = bin(ans)[2:]
    return answer