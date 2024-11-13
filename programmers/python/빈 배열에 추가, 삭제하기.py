# 빈 배열에 추가, 삭제하기
def solution(arr, flag):
    X = []
    for i in range(len(arr)):
        if flag[i]:
            X.extend([arr[i]] * (arr[i] * 2))
        else:
            X = X[:-arr[i]]
    return X


def solution(arr, flag):
    answer = []
    for a, f in zip(arr,flag):
        if f == False:
            answer = answer[:-a]
        else:
            answer += [a] * a*2
    return answer

def solution(arr, flag):
    answer = []
    for i, f in enumerate(flag):
        if f:
            answer += [arr[i]]*(arr[i]*2)
        else:
            answer = answer[:-arr[i]]
    return answer