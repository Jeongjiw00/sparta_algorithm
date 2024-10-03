# ad 제거하기
def solution(strArr):
    answer = []
    for i in strArr:
        if "ad" not in i:
            answer.append(i)

    return answer


def solution(strArr):
    return [word for word in strArr if 'ad' not in word]