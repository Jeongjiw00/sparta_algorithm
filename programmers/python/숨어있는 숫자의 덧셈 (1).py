# 숨어있는 숫자의 덧셈 (1)
def solution(my_string):
    answer = 0
    for num in my_string:
        try:
            answer += int(num)
        except:
            continue
    return answer