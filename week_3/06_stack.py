class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    # push 기능 구현
    def push(self, value):
        if self.is_empty():
            self.head = Node(value)
        else:
            new_head = Node(value)
            new_head.next = self.head
            self.head = new_head

    # pop 기능 구현
    def pop(self):
        if self.is_empty():
            return 'empty!'
        delete_head = self.head
        self.head = self.head.next
        return delete_head.data

    # peek 기능 구현
    def peek(self):
        if self.is_empty():
            return 'empty!'

        return self.head.data

    # isEmpty 기능 구현
    def is_empty(self):
        return self.head is None

stack = Stack()
stack.push(3)
print(stack.peek())
stack.push(4)
print(stack.peek())
print(stack.pop())
print(stack.peek())
print(stack.pop())
print(stack.is_empty())