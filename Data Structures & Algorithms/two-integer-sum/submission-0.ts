class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let result:number[]=[]
        for(let i in nums){
       for (let j = Number(i) + 1; j < nums.length; j++)
           {                 
              if(nums[i]+nums[j]==target){
                    result.push(Number(i))
                    result.push(j)

                }
            }
        }

        return result
    }
}
