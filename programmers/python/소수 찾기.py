# 소수 찾기
# 에라토스의 체
def solution(n):
    answer = []
    array = [True for i in range(n + 1)]

    for i in range(2, int(n ** 0.5) + 1):
        if array[i] == True:
            j = 2
            while i * j <= n:
                array[i * j] = False
                j += 1

    for i in range(2, n + 1):
        if array[i]:
            answer.append(i)

    return len(answer)



# 간단
def solution(n):
    num = set(range(2,n+1))

    for i in range(2,n+1):
        if i in num:
            num-=set(range(2*i,n+1,i))
    return len(num)