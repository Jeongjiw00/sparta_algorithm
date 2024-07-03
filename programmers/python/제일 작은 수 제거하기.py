# 제일 작은 수 제거하기
def solution(mylist):
    if len(mylist) <= 1:
        return [-1]
    else:
        mylist.remove(min(mylist))
        return mylist