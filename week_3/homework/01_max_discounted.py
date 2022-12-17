shop_prices = [30000, 2000, 1500000]
user_coupons = [20, 40]


def get_max_discounted_price(prices, coupons):
    shop_prices.sort(reverse=True)
    user_coupons.sort(reverse=True)
    index = 0
    sum_price = 0

    while index < min(len(shop_prices), len(user_coupons)):
        sum_price += shop_prices[index] * (100 - user_coupons[index]) / 100
        index += 1

    while index < len(shop_prices):
        sum_price += shop_prices[index]
        index += 1
    return round(sum_price)


print(get_max_discounted_price(shop_prices, user_coupons))  # 926000 이 나와야 합니다.