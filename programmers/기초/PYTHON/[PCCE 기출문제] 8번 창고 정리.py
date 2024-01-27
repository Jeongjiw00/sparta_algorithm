# [PCCE 기출문제] 8번 / 창고 정리
def solution(storage, num):
    clean_storage = []
    clean_num = []
    for i in range(len(storage)):
        if storage[i] in clean_storage:
            pos = clean_storage.index(storage[i])
            clean_num[pos] += num[i]
        else:
            clean_storage.append(storage[i])
            clean_num.append(num[i])
            
    max_num = max(clean_num)
    answer = clean_storage[clean_num.index(max_num)]
    return answer


print(solution(["pencil", "pencil", "pencil", "book"], [2, 4, 3, 1]))