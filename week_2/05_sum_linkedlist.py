class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)


def linked_list_sum(linked_list):
    sum_list_in = ''
    cur = linked_list.head
    while cur is not None:
        sum_list_in += str(cur.data)
        cur = cur.next
    return int(sum_list_in)


def get_linked_list_sum(linked_list_1, linked_list_2):
    sum_list_in_1 = linked_list_sum(linked_list_1)
    sum_list_in_2 = linked_list_sum(linked_list_2)
    return sum_list_in_1 + sum_list_in_2

    # sum_1 = ''
    # sum_2 = ''
    # cur_1 = linked_list_1.head
    # cur_2 = linked_list_2.head
    #
    # while cur_1 is not None and cur_2 is not None:
    #     sum_1 += str(cur_1.data)
    #     sum_2 += str(cur_2.data)
    #     cur_1 = cur_1.next
    #     cur_2 = cur_2.next
    #
    # return int(sum_1) + int(sum_2)


linked_list_1 = LinkedList(6)
linked_list_1.append(7)
linked_list_1.append(8)

linked_list_2 = LinkedList(3)
linked_list_2.append(5)
linked_list_2.append(4)

print(get_linked_list_sum(linked_list_1, linked_list_2))
