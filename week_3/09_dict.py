class Dict:
    def __init__(self):
        self.items = [None] * 8

    def put(self, key, value):
        # index = hash(key) % len(self.items)
        self.items[hash(key) % 8] = value

    def get(self, key):
        return self.items[hash(key) % 8]


my_dict = Dict()
my_dict.put("test", 3)
print(my_dict.get("test"))  # 3이 반환되어야 합니다!