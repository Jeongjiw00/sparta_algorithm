# 빈 배열에 추가, 삭제하기
def solution(arr, flag):
    X = []
    for i in range(len(arr)):
        if flag[i]:
            X.extend([arr[i]] * (arr[i] * 2))
        else:
            X = X[:-arr[i]]
    return X