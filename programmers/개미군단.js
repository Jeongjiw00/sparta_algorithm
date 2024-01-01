//** 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지 */
//** 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력 */
function solution1(hp) {
  let count = 0;
  count += parseInt(hp / 5);
  const hp5 = hp % 5;
  if (hp5 >= 3) {
    count += parseInt(hp5 / 3);
    const hp53 = hp5 % 3;
    count += hp53;
  } else {
    count += hp5;
  }
  return count;
}

function solution2(hp) {
  return parseInt(hp / 5) + parseInt((hp % 5) / 3) + parseInt((hp % 5) % 3);
}

console.log(solution1(23));
console.log(solution1(24));
console.log(solution1(999));
