// 15. 3sum
function Threesum(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    let right = nums.length - 1;
    let left = i + 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (left < right) {
      let sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        result.push([nums[i], nums[right], nums[left]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(Threesum([1, 2, 3, -1, -2, -3, 0, 0, 0]));
