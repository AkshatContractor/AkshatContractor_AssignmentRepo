// Q4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) { //String as an argument.

     let rev = str.split("").reverse().join(""); //used in built functions


     if (rev == str) { //check if reverse string is == to actual string
          return true
     }
     return false

}

let str1 = "akshat contractor"; //string 1
let str2 = "bcbcbcbcb"; //string 2
let str3 = "aka"; ////string 3



console.log(isPalindrome(str1)); //passing the strings
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
