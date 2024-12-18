# 잘라서 배열로 저장하기
def solution(my_str, n):
    answer = []

    while len(my_str) > n:
        answer.append(my_str[:n])
        my_str = my_str[n:]

    if my_str != "":
        answer.append(my_str)

    return answer


# 슬라이싱은 초과해도 에러가 나지 않음
def solution(my_str, n):
    return [my_str[i: i + n] for i in range(0, len(my_str), n)]