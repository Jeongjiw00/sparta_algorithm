-- 특정 물고기를 잡은 총 수 구하기
-- JOIN 안 해도 되지만 TYPE 찾기 힘든 대규모의 DB이거나, TYPE을 변경할 경우가 생길 수 있으니 JOIN 활용함. 
SELECT COUNT(*) AS FISH_COUNT
FROM FISH_INFO
  JOIN FISH_NAME_INFO USING(FISH_TYPE)
WHERE FISH_NAME = "BASS" OR FISH_NAME = "SNAPPER"