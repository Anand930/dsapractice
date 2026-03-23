// 918. Maximum Sum Circular SubArray

function MaximumSumSubArray(nums){
    let total = nums[0]
    let currMaxSum = nums[0]
    let currMinSum = nums[0]
    let maxSum = nums[0]
    let minSum = nums[0]
    for(let i=1;i<nums.length;i++){
        
        currSum = Math.max(currMaxSum+nums[i], nums[i])
        maxSum = Math.max(currMaxSum, maxSum)
        currMinSum = Math.min(currMinSum+nums[i],nums[i])
        minSum = Math.min(currMinSum,minSum)
        total+=nums[i]

    }
    return Math.max(total-minSum, total)
}

console.log(MaximumSumSubArray([8,3,-5,2,2,9]));
