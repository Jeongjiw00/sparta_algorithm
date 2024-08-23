# 배열 두 배 만들기
def solution(numbers):
    answer = []
    for num in numbers:
        answer.append(num * 2)
    return answer



def solution(numbers):
    return [num * 2 for num in numbers]