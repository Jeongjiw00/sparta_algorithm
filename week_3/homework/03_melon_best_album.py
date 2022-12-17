genres = ["classic", "pop", "classic", "classic", "pop"]
plays = [500, 600, 150, 800, 2500]


def get_melon_best_album(genre_array, play_array):
    n = len(genre_array)
    total_play = {}
    all_index_play = {}

    #장르별 플레이 횟수 비교
    for i in range(n):
        genre = genre_array[i]
        play = play_array[i]
        if genre not in total_play:
            total_play[genre] = play
            all_index_play[genre] = [(i, play)]
        else:
            total_play[genre] += play
            all_index_play[genre].append((i, play))

    #딕셔너리 정렬
    sorted_total_play_array = sorted(total_play.items(), key=lambda item: item[1], reverse=True)
    result = []
    for genre, value in sorted_total_play_array:
        index_play_array = all_index_play[genre]
        sorted_all_index_play_array = sorted(index_play_array, key=lambda item: item[1], reverse=True)
        for i in range(len(sorted_all_index_play_array)):
            if i > 1: #2개만 가져옴
                break
            result.append(sorted_all_index_play_array[i][0]) #인덱스 반환
    return result

print(get_melon_best_album(genres, plays))  # 결과로 [4, 1, 3, 0] 가 와야 합니다!