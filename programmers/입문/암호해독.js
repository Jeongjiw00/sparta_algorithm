//** 암호화된 문자열 cipher에서 code의 배수 번째 글자만 진짜 암호입니다. */
function solution(cipher, code) {
  let zzin = "";
  for (let i = 0; i < cipher.length; i++) {
    if ((i + 1) % code === 0) {
      zzin += cipher[i];
    }
  }
  return zzin;
}

function solution(cipher, code) {
  return cipher
    .split("")
    .filter((v, i) => (i + 1) % code === 0)
    .join("");
}
