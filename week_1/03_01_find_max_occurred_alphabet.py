input = "hello my name is sparta"

def find_max_occurred_alphabet(string):
    alphabet_array = []

    for i in string:
        if i.isalpha():
            if i in alphabet_array:
                continue
            else:
                alphabet_array.append(i)
        else:
            continue
    # return alphabet_array

    max_alphabet = alphabet_array[0]
    max_count = 0

    for alpha in alphabet_array:
        count = 0
        for j in string:
            if alpha == j:
                count += 1
            else:
                continue
        if max_count < count:
            max_count = count
            max_alphabet = j
        else:
            continue

    return max_alphabet, max_count



result = find_max_occurred_alphabet(input)
print(result)

# 튜터님 코드
# def find_max_occurred_alphabet(string):
#     alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
#                       "t", "u", "v", "x", "y", "z"]
#     max_occurrence = 0
#     max_alphabet = alphabet_array[0]
#
#     for alphabet in alphabet_array:
#         occurrence = 0
#         for char in string:
#             if char == alphabet:
#                 occurrence += 1
#
#         if occurrence > max_occurrence:
#             max_alphabet = alphabet
#             max_occurrence = occurrence
#
#     return max_alphabet