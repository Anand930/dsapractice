// 169. Majority Element

function MajorityElement(nums){
    let candidate = nums[0]
    let count = 1
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==candidate){
            count--
            if(!count){
                candidate=nums[i]
                count=1
            }
        }else{
            count++
        }
    }
    return candidate
}


console.log(MajorityElement([3,3,1,2,1,3]))
