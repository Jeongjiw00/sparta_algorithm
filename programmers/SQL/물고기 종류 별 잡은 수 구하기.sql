-- 물고기 종류 별 잡은 수 구하기
-- GROUP BY FISH_TYPE 은 에러발생
-- which is not functionally dependent on columns in GROUP BY clause
SELECT COUNT(*) AS FISH_COUNT, FISH_NAME
FROM FISH_INFO
  JOIN FISH_NAME_INFO USING(FISH_TYPE)
GROUP BY FISH_NAME
ORDER BY FISH_COUNT DESC