# 덧셈식 출력하기
a, b = map(int, input().strip().split(' '))
print(a, '+', b,'=',a+b)


# f-string
a, b = map(int, input().strip().split(' '))
print(f"{a} + {b} = {a + b}")