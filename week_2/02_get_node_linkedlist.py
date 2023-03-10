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

    def print_all(self):
        cur = self.head
        while cur is not None:
            print(cur.data)
            cur = cur.next

    def get_node(self, index):
        cur = self.head
        count = 0

        while cur is not None:
            if index == count:
                return print(cur.data)

            cur = cur.next
            count += 1

            # if count < index:
            #     raise AttributeError('Length Error : index exceeds list length')



linked_list = LinkedList(5)
linked_list.append(12)
linked_list.get_node(1) # -> 5를 들고 있는 노드를 반환해야 합니다!


        # #튜터님
        # cur = self.head
        # count = 0
        # while count < index:
        #     cur = cur.next
        #     count += 1
        # return cur

        # 예외처리
        # try:
        #     while count < index:
        #         if cur.next is None:
        #             raise AttributeError('Length Error : index exceeds list length')
        #         cur = cur.next
        #         count += 1
        #     return cur
        # except AttributeError as ae:
        #     return ae