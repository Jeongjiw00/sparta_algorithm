# 배열 만들기 6
def solution(arr):
    box = []
    for i in range(len(arr)):
        if box and box[-1] == arr[i]:
            box.pop()
        else:
            box.append(arr[i])

    return box or [-1]