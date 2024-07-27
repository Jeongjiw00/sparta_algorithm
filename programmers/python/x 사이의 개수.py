# x 사이의 개수
def solution(myString):
    answer = []
    myString = myString.split("x")
    for i in myString:
        answer.append(len(i))
    return answer