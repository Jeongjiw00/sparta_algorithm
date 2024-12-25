# 삼각형의 완성조건 (2)
def solution(sides):
    sides = sorted(sides)
    answer = (sides[1] + sides[0]) - (sides[1] - sides[0]) - 1
    return answer

def solution(sides):
    return 2 * min(sides) - 1