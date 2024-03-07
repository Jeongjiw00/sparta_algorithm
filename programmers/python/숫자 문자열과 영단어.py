# 숫자 문자열과 영단어
def solution(s):
    arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    # 리스트나 문자열에서 인덱스와 요소를 함께 받고 싶으면 enumerate
    for idx, a in enumerate(arr):
        s = s.replace(a, str(idx))

    return int(s)