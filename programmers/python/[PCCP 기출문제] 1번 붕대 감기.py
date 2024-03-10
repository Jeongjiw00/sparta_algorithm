# [PCCP 기출문제] 1번 / 붕대 감기
# bandage는 [시전 시간, 초당 회복량, 추가 회복량]
# attacks[i]는 [공격 시간, 피해량]
def solution(bandage, health, attacks):
    # 끝나는 시간
    end_time = attacks[-1][0]
    # 최대 체력
    max_health = health
    # 공격 시간 딕셔너리
    attacks = { attack[0]:attack[1] for attack in attacks}
    # 연속 시간
    success_time = 1

    for time in range(1, end_time + 1):
        # 공격을 당할 경우
        if time in attacks:
            success_time = 1
            health -= attacks[time]

            if health <= 0:
                return -1
        # 공격 안당하는 경우
        else:
            health = min(max_health, health + bandage[1])

            if success_time == bandage[0]:
                health = min(max_health, health + bandage[2])
                success_time = 1
            else:
                success_time += 1

    return health