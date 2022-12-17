numbers = [1, 1, 1, 1, 1]
target_number = 3
cnt = 0  # target값이 나오는 연산 갯수
# sum = 0  # 진행된 연산 합
# index = 0  # 연산순서

def get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, index, sum):
    if index == len(array):
        if sum == target:
            global cnt
            cnt += 1
        return

    get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, index + 1, sum + array[index])
    get_count_of_ways_to_target_by_doing_plus_or_minus(array, target, index + 1, sum - array[index])

get_count_of_ways_to_target_by_doing_plus_or_minus(numbers, target_number, 0, 0)
print(cnt)  # 5를 반환해야 합니다!