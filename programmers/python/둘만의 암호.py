# 둘만의 암호
def solution(s, skip, index):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    answer = ""

    for a in list(skip):
        alpha = alpha.replace(a,"")
        
    for b in s:
        answer += alpha[(alpha.find(b) + index) % len(alpha)]

    return answer



# 다른 풀이
def solution(s, skip, index):
    answer = ''
    
    # 'a'부터 'z'까지의 알파벳 중, skip에 포함되지 않은 문자만을 리스트로 만들어 'letters'에 저장
    letters = [chr(i) for i in range(ord('a'), ord('z')+1) if chr(i) not in skip]
    
    for char in s:
        # 현재 문자 char의 letters에서의 위치(index)를 찾고,
        # 주어진 index만큼 뒤의 문자를 찾되, 만약 리스트를 벗어나면 리스트의 처음부터 다시 시작하도록 모듈러 연산 사용
        new_char = letters[(letters.index(char) + index) % len(letters)]

        # 변환된 문자를 결과 문자열에 추가
        answer += new_char
        
    return answer