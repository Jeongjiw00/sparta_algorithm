# 외계행성의 나이
def solution(age):
    answer = ''
    list = ['a','b','c','d','e','f','g','h','i','j']
    age = str(age)
    for i in age:
        answer += list[int(i)]
    return answer


def solution(age):
    aa = str(age)
    return aa.translate(str.maketrans('0123456789', 'abcdefghij'))