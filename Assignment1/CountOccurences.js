// Q13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.

function Count(str, chr) { //Taking one STRING and CHARACTER as an argument from the user.

     let str1 = str; //Storing the string to a new varible
     let chr1 = chr; //Storing the character to a new varible
     let count = 0; //one count varible intialised with the zero.


     if(str1.length === 0 ) return null; //base case string empty then return null.

     for (let i = 0; i < str1.length; i++) { //for loop running from the 0 to the string length
          if (str1[i] === chr1) { //if string character present at index i == character then count increases by one.
               count++;
          }
     }
     return count; //return the final count.
}


let result = Count("AKSHAT", 'A'); //passing one string and one character to the funct ion.

console.log(result); //printing the result.