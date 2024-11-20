# 글자 지우기
def solution(my_string, indices):
    for idx in indices:
        my_string = my_string[:idx] + ' ' + my_string[idx+1:]
    return my_string.replace(' ', '')