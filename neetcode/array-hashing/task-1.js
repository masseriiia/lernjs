// Содержит дубликат

// Если задан целочисленный массив nums, вернуть значение true, если какое-либо значение встречается в массиве более одного разаfalse , в противном случае вернуть значение .

// Решение 

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         const set = new Set()

//         for (const setElement of nums) {
//             if (set.has(setElement)) {
//                 return true
//             }
//             set.add(setElement)
//         }

//         return false
//     }
// }