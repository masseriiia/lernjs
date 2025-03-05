// Действительная анаграмма

// Даны две строки sи t, вернуть , trueесли две строки являются анаграммами друг друга, в противном случае вернуть false.
// Анаграмма — это строка, которая содержит те же символы , что и другая строка, но порядок символов может быть другим.


// Решение 1

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) {
//         return s.split("").sort().join("") === t.split("").sort().join("")
//     }
// }


// Решение 2

// class Solution {
//     /**
//      * @param {string} s
//      * @param {string} t
//      * @return {boolean}
//      */
//     isAnagram(s, t) {
//       const obj = {}
  
//       for (const element of s) {
//         if (!obj[element]) {
//           obj[element] = 1
//         } else {
//           obj[element]++
//         }
//       }
  
//       for (const element of t) {
//         if (obj[element]) {
//           obj[element]--
//         } else {
//           return false
//         }
//       }
  
//       for (const objKey in obj) {
//         if (obj[objKey] > 0) {
//           return false
//         }
//       }
  
//       return true
//     }
//   }
  
//   const solution = new Solution()
  
//   console.log(solution.isAnagram("racecar", "carrace"))
//   console.log(solution.isAnagram("jar", "jam"))
//   console.log(solution.isAnagram("xx", "x"))
  