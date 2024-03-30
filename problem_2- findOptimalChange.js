const denom = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

function findOptimalChange(amount) {
  let bills = 0;
  let total = 0;
  for (let i = denom.length - 1; i >= 0; i--) {
    while (total + denom[i] <= amount) {
      total = total + denom[i];
      bills++;
    }
    if (total === amount) return bills;
  }
}

console.log(findOptimalChange(70));
console.log(findOptimalChange(121));
