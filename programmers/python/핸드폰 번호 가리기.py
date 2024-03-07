# 핸드폰 번호 가리기
def solution(phone_number):
  r = len(phone_number)-4
  answer = '*' * r + phone_number[-4:]
  return answer

print(solution("01033334444"))