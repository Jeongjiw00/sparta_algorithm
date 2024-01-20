// qr code
function solution(q, r, code) {
  return [...code].filter((alpha, index) => index % q === r).join("");
}
