// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return

function solution(chicken) {
  let answer = 0;
  let coupon = 0;
  while (Math.floor(chicken / 10) !== 0) {
    answer += Math.floor(chicken / 10);
    coupon += chicken % 10;
    chicken = Math.floor(chicken / 10);
  }

  coupon += chicken;

  while (Math.floor(coupon / 10) !== 0) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
  }

  return answer;
}

console.log(solution(100)); //11
console.log(solution(1081)); //120
console.log(solution(1999)); //222
