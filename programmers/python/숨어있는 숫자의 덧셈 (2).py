# 숨어있는 숫자의 덧셈 (2)
def solution(my_string):
    result = 0

    for char in my_string:
        if char.isalpha():
            my_string = my_string.replace(char, ' ')

    s = my_string.split(' ')

    for i in s:
        if i.isdigit():
            result += int(i)
    return result