# 배열 회전시키기
def solution(numbers, direction):
    if direction == 'right':
        numbers.insert(0, numbers.pop())
    else:
        numbers.append(numbers.pop(0))
    return numbers