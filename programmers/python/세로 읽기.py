# 세로 읽기
def solution(my_string, m, c):
    answer = []

    for i in range(0, len(my_string), m):
        answer.append(my_string[i + c - 1])

    return ''.join(answer)