-- 조건에 맞는 개발자 찾기
-- 개발자의 기술을 나타내는 SKILL_CODE의 각 비트는 특정 기술을 나타내므로 
-- 특정 기술을 가진 개발자를 찾기 위해 비트 연산자 '&'를 사용할 수 있고, 
-- 따라서 "Python과 C#의 스킬을 가진다"는 말은 9번째 비트나 11번째 비트가 1인지 확인하면 됩니다.
-- "& Python(9번째 비트)"과 '& 'C#(11번째 비트)"을 사용해서 해당하는 자리가 1인지를 확인
SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS 
WHERE (SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'C#')) OR
      (SKILL_CODE & (SELECT CODE FROM SKILLCODES WHERE NAME = 'Python')) 
ORDER BY ID



SELECT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM DEVELOPERS d
WHERE EXISTS(SELECT 1
             FROM SKILLCODES s
             WHERE s.NAME IN ('Python', 'C#') AND
             d.SKILL_CODE & s.CODE = s.CODE )
ORDER BY ID



SELECT DISTINCT a.ID, a.EMAIL, a.FIRST_NAME, a.LAST_NAME
FROM DEVELOPERS a, SKILLCODES b
WHERE 
    (a.SKILL_CODE & b.CODE) > 0
    AND b.NAME IN ("Python", "C#")
ORDER BY a.ID;