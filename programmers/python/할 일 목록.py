# 할 일 목록
def solution(todo_list, finished):
    answer = []
    for i in range(0, len(finished)):
        if finished[i] == 0:
            answer.append(todo_list[i])
    return answer