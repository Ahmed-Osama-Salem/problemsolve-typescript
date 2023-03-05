/* eslint-disable prettier/prettier */
function climbStairs(n: number): number {
  const steps = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  console.log(steps);

  return steps[n];
}

console.log(climbStairs(3));
