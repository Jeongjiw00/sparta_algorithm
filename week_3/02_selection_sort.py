input = [4, 6, 2, 9, 1]


def selection_sort(array):
    for i in range(len(array)-1):
        for j in range(i,len(array)):
            if array[i] > array[j]:
                array[i], array[j] = array[j], array[i]
    return

selection_sort(input)
print(input) # [1, 2, 4, 6, 9] 가 되어야 합니다!