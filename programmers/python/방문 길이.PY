def solution(dirs):
    answer = 0
    route = set()
    x, y, x_, y_= 0, 0, 0, 0
    
    for i in dirs:
        if i == 'U':
            x_, y_ = x, y + 1
        if i == 'D':
            x_, y_ = x, y - 1
        if i == 'R':
            x_, y_ = x + 1, y
        if i == 'L':
            x_, y_ = x - 1, y
        if abs(x_) <= 5 and abs(y_) <= 5:
            route.add((x, y, x_, y_))
            route.add((x_, y_, x, y))
            x, y = x_, y_
        
    answer = len(route) // 2 
            
    return answer

print(solution('ULURRDLLU')) # 7
print(solution('LULLLLLLU')) # 7