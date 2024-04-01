const denom = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

function findOptimalChange(amount) {
  // find edge cases
  if (amount < 1) return "Amount must be greater than 0";
  if (amount === 1) return 1;

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

console.log('Input: 70');
console.log('Expected value: 50 + 20 = 2');
console.log('Result: ', findOptimalChange(70));
console.log('\nInput: 121');
console.log('Expected value: 100 + 20 + 1 = 3');
console.log('Result: ', findOptimalChange(121));
console.log('\nInput: 17124');
console.log('Expected value: (1000 x 17) + (100 x 1) + (20 x 1) + (2 x 2) = 21');
console.log('Result: ', findOptimalChange(17124));
console.log('\nInput: 1');
console.log('Expected value: 1');
console.log('Result: ', findOptimalChange(1));
console.log('\nInput: 0');
console.log('Expected value: Amount must be greater than 0');
console.log('Result: ', findOptimalChange(0));
console.log('\nInput: -1');
console.log('Expected value: Amount must be greater than 0');
console.log('Result: ', findOptimalChange(-1));
