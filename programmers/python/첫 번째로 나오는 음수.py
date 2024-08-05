# 첫 번째로 나오는 음수
def solution(num_list):
    for i, num in enumerate(num_list):
        if num < 0:
            return i
    return -1