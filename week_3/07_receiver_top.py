top_heights = [6, 9, 5, 7, 4]

def get_receiver_top_orders(heights):
    # receiver = [0] * len(heights)
    # for i in range(4,-1,-1):
    #     for j in range(i-1,-1,-1):
    #         if heights[i] < heights[j]:
    #             receiver[i] = j + 1
    #             break
    # return receiver

    receiver = [0] * len(heights)
    while heights:
        height = heights.pop()
        for i in range(len(heights) - 1, -1, -1):
            if height < heights[i]:
                receiver[len(heights)] = i + 1
                break

    return receiver

print(get_receiver_top_orders(top_heights))  # [0, 0, 2, 2, 4] 가 반환되어야 한다!