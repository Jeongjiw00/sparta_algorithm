# 문자열 계산하기
def solution(my_string):
    string = my_string.split()
    answer = int(string[0])
    for i in range(len(string) - 1):
        if i % 2 == 1:
            if string[i] == "+":
                answer += int(string[i + 1])
            else:
                answer -= int(string[i + 1])

    return answer