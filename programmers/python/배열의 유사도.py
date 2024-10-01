# 배열의 유사도
def solution(s1, s2):
    count = 0

    for el in s1:
        if el in s2:
            count += 1

    return count


def solution(s1, s2):
    return len(set(s1)&set(s2));