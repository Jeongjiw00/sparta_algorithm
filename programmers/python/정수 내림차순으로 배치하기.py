# 정수 내림차순으로 배치하기
def solution(n):
    ls = list(str(n))
    ls.sort(reverse = True)
    return int("".join(ls))


def solution(n):
    return int("".join(sorted(str(n), reverse=True)));