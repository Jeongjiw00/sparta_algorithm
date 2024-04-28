// [1차] 캐시
// 캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
// miss +5 (캐시에 넣는다, 캐시가 가득차 있다면 오래된 데이터를 제거하고 넣는다.)
// hit +1 (해당 데이터를 캐시의 가장 뒤로 보낸다.)
// 대소문자 구분을 하지 않는다.

// 1. 대소문자를 구분하지 않으니 전부 통일
// 2. miss일 때 (캐시에 없을 때)
// 3. hit 일 때 (캐시에 있을 때)

function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  cities = cities.map((e) => e.toLowerCase());

  cities.forEach((e) => {
    let isCache = cache.includes(e);

    // miss
    if (!isCache) {
      cache.push(e);

      if (cache.length > cacheSize) {
        cache.shift();
      }

      answer += 5;
    }
    // hit
    else {
      cache = cache.filter((element) => element !== e);
      cache.push(e);

      answer += 1;
    }
  });

  return answer;
}
