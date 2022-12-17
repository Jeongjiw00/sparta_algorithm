input = "011110"

def find_count_to_turn_out_to_all_zero_or_all_one(string):




    # n = len(string)
    # count_zero = 0
    # count_one = 0
    #
    # if string[0] == '0':
    #     count_zero += 1
    # elif string[0] == '1':
    #     count_one += 1
    #
    # for i in range(n-1): #i+1을 해주기 떄문에
    #     if string[i] != string[i + 1]:
    #         if string[i+1] == '0':
    #             count_zero += 1
    #         elif string[i+1] == '1':
    #             count_one += 1
    # return min(count_one, count_zero)


result = find_count_to_turn_out_to_all_zero_or_all_one(input)
print(result)