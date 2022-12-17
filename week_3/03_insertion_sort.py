input = [4, 6, 2, 9, 1]


def insertion_sort(array):
    for i in range(len(array)-1): #i=0,1,2,3,4
        for index in range(i,0-1,-1): #0/10/210/3210
            if array[index] > array[index+1]:
                array[index], array[index+1] = array[index+1], array[index]
            else:
                break
    return array

# def insertion_sort(array):
#     n = len(array)
#     for i in range(1, n):
#         for j in range(i):
#             if array[i - j - 1] > array[i - j]:
#                 array[i - j - 1], array[i - j] = array[i - j], array[i - j - 1]
#             else:
#                 break
#     return array

print(insertion_sort(input))
# print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!

print("정답 = [4, 5, 7, 7, 8] / 현재 풀이 값 = ",insertion_sort([5,8,4,7,7]))
print("정답 = [-1, 3, 9, 17] / 현재 풀이 값 = ",insertion_sort([3,-1,17,9]))
print("정답 = [-3, 32, 44, 56, 100] / 현재 풀이 값 = ",insertion_sort([100,56,-3,32,44]))