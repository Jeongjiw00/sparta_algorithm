def find_alphabet_occurrence_array(string):
    alphabet_occurrence_array = [0] * 26

    for str in string:
        if str.isalpha():
            alphabet_occurrence_array[ord(str) - ord('a')] += 1
        else:
            continue
    return alphabet_occurrence_array



print(find_alphabet_occurrence_array("hello my name is sparta"))