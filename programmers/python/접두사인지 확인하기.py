# 접두사인지 확인하기
def solution(my_string, is_prefix):
    return 1 if my_string.find(is_prefix) == 0 else 0



def solution(my_string, is_prefix):
    return int(my_string.startswith(is_prefix))