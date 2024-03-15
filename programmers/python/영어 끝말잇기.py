# 영어 끝말잇기
def solution(n, words):
    p = [words[0]]
    
    for i, w in enumerate(words):
        if i == 0:
            pass
        else:
          if w not in p and p[-1][-1] == w[0]:
              p.append(w)
          else:
              return [i % n + 1, (i // n) + 1]
    return [0, 0]

print(solution(2,["hello", "one", "even", "never", "now", "world", "draw"])) 	# [1,3]