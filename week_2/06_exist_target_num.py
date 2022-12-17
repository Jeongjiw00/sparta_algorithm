finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


# def is_existing_target_number_binary(target, array):
#     current_min = 0
#     current_max = len(array) - 1
#     current_quess = (current_max + current_min) // 2
#
#     find_count = 0
#     while current_min <= current_max:
#         find_count += 1
#         if array[current_quess] == target:
#             print(find_count)
#             return '찾았다'
#         elif array[current_quess] < target:
#             current_min = current_quess + 1
#         else:
#             current_max = current_quess - 1
#
#         current_quess = (current_max + current_min) // 2


def is_existing_target_number_binary(target, array):
    result = False
    count = 0

    while result == False:
        count += 1
        all_numbers = len(finding_numbers)
        finding = all_numbers // 2 - 1

        if array[finding] < target:
            del array[0:finding]

        elif array[finding] > target:
            del array[finding+1:all_numbers]

        else:
            result = True
            print('찾았다!')

    return count


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)