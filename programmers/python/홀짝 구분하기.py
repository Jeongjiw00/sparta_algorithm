# 홀짝 구분하기
n = int(input())
print(f"{n} is {'even' if n % 2 == 0 else 'odd'}")



n=int(input())
print(f"{n} is {'eovdedn'[n&1::2]}")