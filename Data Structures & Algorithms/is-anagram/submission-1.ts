class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      const arrS:string[]=s.split('')
      const arrT:string[]=t.split('')

      const sortedS=arrS.sort().join('')
      const sortedT=arrT.sort().join('')


if(sortedS==sortedT)
return true

else return false


    }
}
