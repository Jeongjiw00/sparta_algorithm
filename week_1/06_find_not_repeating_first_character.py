input = "abadabac"

def find_not_repeating_character(string):
    # 시간복잡도 신경쓰고
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord('a')
        alphabet_occurrence_array[arr_index] += 1

    not_repeating_character_array = []
    for index in range(len(alphabet_occurrence_array)):
        alphabet_occurrence = alphabet_occurrence_array[index]
        if alphabet_occurrence == 1:
            not_repeating_character_array.append(chr(index + ord('a')))

    for char in string:
        if char in not_repeating_character_array:
            return  char




    # # 시간복잡도 신경안쓰고
    # for i in string:
    #     count = 0
    #     for j in string:
    #         if i == j:
    #             count += 1
    #         else:
    #             continue
    #
    #     if count != 1:
    #         continue
    #     elif count == 1:
    #         return i
    #     else:
    #         return '_'



result = find_not_repeating_character(input)
print(result)