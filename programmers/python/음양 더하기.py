# 음양 더하기
def solution(absolutes, signs):
    answer=0
    for absolute,sign in zip(absolutes,signs):
        if sign:
            answer+=absolute
        else:
            answer-=absolute
    return answer

# zip : 다중 리스트에서 순서대로 요소를 얻을 수 있음.
index =[1,2,3,4]
list = ["one", "two", "three", "four"]

for x, y in zip(index, list):
  print(x, y)
  
