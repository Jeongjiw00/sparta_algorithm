# 컨트롤 제트
def solution(s):
    stack = []
    for a in s.split():
        if a != 'Z':
            stack.append(int(a))
        else:
            stack.pop()

    return sum(stack)
