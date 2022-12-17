array_a = [1, 2, 3, 5]
array_b = [4, 6, 7, 8]


def merge(array1, array2):
    array_new =[]

    while array1 != [] and array2 != []:
        if array1[0] < array2[0]:
            array_new.append(array1[0])
            array1.pop(0)
        elif array1[0] > array2[0]:
            array_new.append(array2[0])
            array2.pop(0)
        continue

    if array1 == []:
        array_new += array2
    elif array2 == []:
        array_new += array1

    return array_new


print(merge(array_a, array_b))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!