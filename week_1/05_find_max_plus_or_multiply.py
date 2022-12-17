input = [0, 3, 5, 6, 1, 2, 4]

def find_max_plus_or_multiply(array):
    count = 0
    for i in array:
        if i > 1:
            if count > 1:
                count *= i
            else:
                count += i
        else:
            count += i

    return count

result = find_max_plus_or_multiply(input)
print(result)

# def find_max_plus_or_multiply(array):
#     count = 0
#     for i in array:
#         if i > 1 or count > 1: #반대로하면 문제없음
#             count *= i
#         else:
#             count += i
#
#     return count