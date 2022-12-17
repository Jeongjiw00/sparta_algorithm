input = 20

def find_prime_list_under_number(number):
    number_list = []
    for all in range(number):
        number_list.append(all+1)
    number_list.remove(1)

    prime_list = []
    for start in number_list:
        count = 0
        for div in range(2, start+1):
            if start % div == 0:
                count += 1
            if count > 1:
                break
        if count == 1:
            prime_list.append(start)


    return prime_list


result = find_prime_list_under_number(input)
print(result)