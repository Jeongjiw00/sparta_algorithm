# 진료 순서 정하기
def solution(emergency):
    arr = []
    for i in emergency:
        idx = 1
        for j in emergency:
            if i < j:
                idx += 1
        arr.append(idx)
    return arr



def solution(emergency):
    e = sorted(emergency, reverse = True)
    return [e.index(i) + 1 for i in emergency]