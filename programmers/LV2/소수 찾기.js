// 소수 찾기
function solution(numbers) {
  const primes = Array(1_000_000).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= 1000; i++) {
    for (let j = i * 2; j < 1_000_000; j += i) {
      primes[j] = false;
    }
  }

  const primeList = {};

  const dfs = (nums, selected = Array(nums.length).fill(false), comb = "") => {
    const num = Number(comb);
    let count = 0;
    if (primes[num] && !primeList[num]) {
      primeList[num] = true;
      count += 1;
    }
    for (let i = 0; i < nums.length; i++) {
      if (selected[i]) {
        continue;
      }
      selected[i] = true;
      count += dfs(nums, selected, comb + nums[i]);
      selected[i] = false;
    }
    return count;
  };

  return dfs(numbers);
}

function solution2(numbers) {
  let answer = 0;
  const numArr = numbers.split("");
  const n = numArr.length;
  const ch = Array.from({ length: n }, () => 0);
  let temp = Array.from({ length: n }, () => 0);
  const tempSet = new Set();

  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  function DFS(depth, length) {
    if (depth === length) {
      const num = parseInt(temp.slice(0, length).join(""));
      if (num !== 0 && !tempSet.has(num) && isPrime(num)) {
        tempSet.add(num);
        answer++;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[depth] = numArr[i];
          DFS(depth + 1, length);
          ch[i] = 0;
        }
      }
    }
  }

  for (let length = 1; length <= n; length++) {
    DFS(0, length);
  }

  return answer;
}
