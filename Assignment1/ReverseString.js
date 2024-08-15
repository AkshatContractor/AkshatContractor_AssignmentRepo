// Q10: Create a function `reverseString` that takes a string and returns the string reversed.



function Rev(str) { //Rev funtion taking the string from the user
     
     let str2 = str; //storing the string in a new varible


     let str1 = ""; //intializing the empty string


     for (let i = str2.length - 1; i >= 0; i--) { //for loop strting from the last index of the string till the zero.
          str1 += str2[i]; //str1 becomes the new reversed string.
     }

     return str1;
}

let result = Rev("AKSHAT"); //passing the value to the function.


console.log("The Revresed String is " + result); //printing the result.