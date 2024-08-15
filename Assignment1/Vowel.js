// Q6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.

function CountVowels(str) {
     let count = 0; //Intialise as zero
     const vowels = ['a', 'e', 'i', 'o', 'u']; //array of vowels
 
     for (let i = 0; i < str.length; i++) { //for loop from zero to the length of the array
         if (vowels.includes(str[i].toLowerCase())) { //convert to lowercase
             count++; //increment count with 1
         }
     }
 
     return count; //return the final count
 }
 
 let vowelCount = CountVowels("AKSHAT"); //passing string as an argument to the function
 
 console.log(vowelCount); //printing the final value
 