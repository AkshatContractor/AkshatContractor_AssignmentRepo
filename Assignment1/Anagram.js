// Q1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

function isAnagram(str1, str2) { //Two string as an argument
     
     str1 = str1.toLowerCase(); //Convert to lower case
     str2 = str2.toLowerCase(); //Convert to lower case


     if (str1.length !== str2.length) { //base case: check length of two strings
          return false;
     }

     
     let sortedStr1 = str1.split('').sort().join(''); //split then sort and then join them
     let sortedStr2 = str2.split('').sort().join(''); //split then sort and then join them

     return sortedStr1 === sortedStr2;  //Compare two strings.
}


console.log(isAnagram("AKSHAT", "AKC")); 
console.log(isAnagram("listen", "silent")); 
