# print('hello')

# s = "abcdefg"
# print(s[0].isalpha())
# print(s[0])

# count = ''
# count += str(6)
# print(type(count))
# count += str(7)
# print(type(count))
# count += str(8)
# print(type(count))
# print(count)
# print(int(count))

# numbers = [1,2,3,4,5]
#
# for index in range(len(numbers)):
#     print(index)

#
# array_a = [1, 2, 3, 5]
# array_b = [4, 6, 7, 8]
# array_a.pop(0)
# print(array_a)
# array_a.pop(0)
# print(array_a)
# array_a.pop(0)
# print(array_a)
# array_a.pop(0)
# print(array_a)
# if array_a != []:
#     print(True)
# else:
#     print(False)

# def solution(order):
#     answer = 0
#     list = [3, 6, 9]
#
#     if 1 <= order <= 1000000:
#         string = str(order)
#         for index in range(len(list)):
#             for i in range(len(string)):
#                 print(index, i)
#                 if list[index] == int(string[i]):
#                     answer += 1
#
#     return answer
#
#
# print(solution(3333))

def solution(id_pw, db):
    answer = ''
    if id_pw not in db:
        for i in range(len(db)):
            if id_pw[0] not in db[i]:
                answer = 'fail'
            else:
                answer = 'wrong pw'
                break
    else:
        answer = 'login'

    return answer


print(solution(["programmer01", "15789"],
               [["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]]))

def solution(id_pw, db):
    answer = ''
    if id_pw not in db:
        for i in range(len(db)):
            if id_pw[0] not in db[i]:
                answer = 'fail'
                continue
            else:
                if id_pw[1] not in db[i]:
                    answer = 'wrong pw'
                    break
                else:
                    answer = 'login'
                    break
    else:
        answer = 'login'

    return answer