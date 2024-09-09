# 글자 이어 붙여 문자열 만들기
def solution(my_string, index_list):
    answer = []
    for i in index_list:
        answer.append(my_string[i])

    return ''.join(answer)


def solution(my_string, index_list):
    return "".join(my_string[i] for i in index_list)