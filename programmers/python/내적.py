# 내적
def solution(a, b):
    c = []
    for i in range(len(a)):
        c.append(a[i]*b[i])
    return sum(c)


# 1
def solution(a, b):

    return sum([x*y for x, y in zip(a,b)])

# 2
solution = lambda x, y: sum(a*b for a, b in zip(x, y))