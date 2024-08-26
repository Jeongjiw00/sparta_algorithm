# l로 만들기
def solution(myString):
    answer = [x if x > 'l' else 'l' for x in myString]
    return ''.join(answer)



def solution(myString):
    return myString.translate(str.maketrans('abcdefghijk', 'lllllllllll'))