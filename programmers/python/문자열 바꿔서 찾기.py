# 문자열 바꿔서 찾기
def solution(myString, pat):
    answer=''
    for m in myString:
        if m=='A':
            answer+='B'
        elif m=='B':
            answer+='A'
        else:
            answer+=m

    return int(pat in answer)




def solution(myString, pat):
    a = myString.replace('A', 'Y')
    a = a.replace('B', 'X')
    b = pat.replace('A', 'X')
    b = b.replace('B', 'Y')
    return 1 if b in a else 0