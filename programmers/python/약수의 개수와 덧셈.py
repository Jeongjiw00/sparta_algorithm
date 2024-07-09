# 약수의 개수와 덧셈
def solution(left, right):
    answer = 0

    for i in range(left, right+1):
        cnt = 1
        num = 1
        while num < i:
            if i%num == 0:
                cnt += 1
            num += 1

        if cnt % 2 == 0:
            answer += i
        else:
            answer -= i

    return answer

# 제곱수는 약수의 개수가 홀수
def solution2(left, right):
    answer = 0
    for i in range(left,right+1):
        if int(i**0.5)==i**0.5:
            answer -= i
        else:
            answer += i
    return answer