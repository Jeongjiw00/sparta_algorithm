# 5명씩
def solution(names):
    answer = []
    for i in range(len(names)):
        if i % 5 == 0:
            answer.append(names[i])
    return answer


def solution(names):
    return names[::5]