-- 중성화 여부 파악하기
SELECT ANIMAL_ID, NAME, IF(SEX_UPON_INTAKE like 'Neutered%' or SEX_UPON_INTAKE like 'Spayed%' , 'O','X') as 중성화
FROM ANIMAL_INS
ORDER BY ANIMAL_ID


-- (CASE
-- WHEN SEX_UPON_INTAKE like '%Neutered%' THEN 'O'
-- WHEN SEX_UPON_INTAKE like '%Spayed%' THEN 'O'
-- ELSE 'X' END) as '중성화'