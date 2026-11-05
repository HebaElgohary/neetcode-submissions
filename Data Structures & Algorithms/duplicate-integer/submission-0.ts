class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
      let found:boolean=false

        for(let i of nums){
    let b=nums.filter((num)=>num==i)

    b.length>1?found=true:found= false
    if(found)
    return true
        else  continue

        }
        return found
    }

}
let s=new Solution()
    let nums = [1, 2, 3, 3]
s.hasDuplicate(nums)