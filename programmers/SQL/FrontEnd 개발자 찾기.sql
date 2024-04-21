-- FrontEnd 개발자 찾기
-- CODE가 1000이고, SKILL_CODE가 1101이라면 CODE & SKILL_CODE = 1000. 
-- 각 자리수별로 모두 1인 경우 1, 그 외에는 0
-- ON 뒤에는 조건문이 오기 때문에 결과값이 0이 아닌 경우,
-- 즉 SKILL_CODE에 CODE가 포함된 경우 조인이 성립
SELECT DISTINCT ID, EMAIL, FIRST_NAME, LAST_NAME
FROM SKILLCODES S
  JOIN DEVELOPERS ON CODE & SKILL_CODE
WHERE CATEGORY = 'Front End'
ORDER BY ID;