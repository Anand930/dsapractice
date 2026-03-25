// 167. Two Sum - II

function twoSum(numbers, target){
    let right = numbers.length-1
    let left = 0
    let sum = 0
    while(left<right){
        sum = numbers[left]+numbers[right]
        if(sum>target){
            right--
        }else if(sum<target){
            left++
        }else{
            return [left+1,right+1]
        }
    }
}

console.log(twoSum([1,4,5,7,8,9],14));
