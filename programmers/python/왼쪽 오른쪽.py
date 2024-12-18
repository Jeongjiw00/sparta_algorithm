# 왼쪽 오른쪽
def solution(str_list):
    for i, s in enumerate(str_list):
        if s == 'l':
            return str_list[:i]
        elif s == 'r':
            return str_list[i+1:]
    return []


def solution(str_list):
    for i in range(len(str_list)):
        if str_list[i]=='l': return str_list[:i]
        elif str_list[i]=='r': return str_list[i+1:]
    return []

    