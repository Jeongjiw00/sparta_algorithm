# 문자열 여러 번 뒤집기
def solution(str, q):
    str = list(str)
    for s, e in q:
        str[s:e+1] = reversed(str[s:e+1])
    return ''.join(str)

def solution(my_string, queries):
    for s, e in queries:
        my_string = my_string[:s]+my_string[s:e+1][::-1]+my_string[e+1:]

    return my_string



