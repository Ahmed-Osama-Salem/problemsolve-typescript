function removeElement(nums: number[], val: number): number {
  const k = nums.filter(n => {
    if (n !== val) {
      console.log(n);
      return n.toFixed();
    } else {
      return 0;
    }
  });
  console.log(k, 'result');
  console.log(k.length, 'result');
  return k.length as number;
}

removeElement([3, 2, 2, 3], 3);
console.log('##########################');
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
