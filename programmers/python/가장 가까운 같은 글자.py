# 가장 가까운 같은 글자
def solution(s):
    answer = []
    box = dict()
    
    for i in range(len(s)):
        if s[i] not in box:
            answer.append(-1)
        else:
            answer.append(i - box[s[i]])
        box[s[i]] = i
        
    return answer