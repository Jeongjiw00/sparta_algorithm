# 삼각형의 완성조건 (1)
def solution(sides):
    c = max(sides)
    sides.remove(c)
    a = sum(sides)

    return 1 if c < a else 2