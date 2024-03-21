-- 보호소에서 중성화한 동물
SELECT A.ANIMAL_ID, A.ANIMAL_TYPE, A.NAME
FROM ANIMAL_INS A
  JOIN ANIMAL_OUTS B USING(ANIMAL_ID)
WHERE SEX_UPON_INTAKE LIKE "Intact%" AND (SEX_UPON_OUTCOME LIKE "Spayed%" OR SEX_UPON_OUTCOME LIKE "Neutered%")
