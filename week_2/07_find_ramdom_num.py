finding_target = 2
finding_numbers = [0, 3, 5, 6, 1, 2, 4]

def is_exist_target_number_binary(target, numbers):
    for i in range(0, len(numbers) - 1):
        if numbers[i] == finding_target:
            return True

#정렬이 되어있지 않아서 이진탐색 불가

result = is_exist_target_number_binary(finding_target, finding_numbers)
print(result)