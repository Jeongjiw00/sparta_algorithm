// 시저 암호
function solution(s, n) {
  return s
    .split("")
    .map((alpha) => {
      if (alpha == " ") {
        return alpha;
      }
      const code = alpha.charCodeAt();
      return alpha.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(code + n - 26)
        : String.fromCharCode(code + n);
    })
    .join("");
}
