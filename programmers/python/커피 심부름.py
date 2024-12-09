# 커피 심부름
def solution(order):
    answer = 0
    for want in order:
        if 'latte' in want:
            answer += 500
        answer += 4500

    return answer