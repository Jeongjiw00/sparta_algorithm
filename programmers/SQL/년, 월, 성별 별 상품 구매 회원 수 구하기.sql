-- 년, 월, 성별 별 상품 구매 회원 수 구하기
SELECT YEAR(SALE.SALES_DATE) AS YEAR,
  MONTH(SALE.SALES_DATE) AS MONTH,
  INFO.GENDER,
  COUNT(DISTINCT INFO.USER_ID) AS USERS
FROM USER_INFO AS INFO
LEFT JOIN ONLINE_SALE AS SALE ON INFO.USER_ID = SALE.USER_ID
WHERE SALE.SALES_DATE IS NOT NULL AND INFO.GENDER IS NOT NULL
GROUP BY 1, 2, 3
ORDER BY 1, 2, 3