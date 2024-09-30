# 점의 위치 구하기
def solution(dot):
    x, y = dot
    if x * y > 0:
        return 1 if x > 0 else 3
    else:
        return 4 if x > 0 else 2

def solution2(dot):
   quad = [(2, 1), (3, 4)]
   return quad[dot[1] < 0][dot[0] > 0] 