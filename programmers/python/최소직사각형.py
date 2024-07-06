# 최소직사각형
def solution(sizes):
    sizes = [sorted(s) for s in sizes]
    return max([x[0] for x in sizes]) * max([x[1] for x in sizes])





def solution2(sizes):
    return max(max(x) for x in sizes) * max(min(x) for x in sizes)