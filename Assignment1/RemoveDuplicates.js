// Q12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.

function Removeduplicates(n) { //passing the user value to the function
     const checkArr = n; // new varible stoing the user value
     const newArr = []; //initilizing the empty array

     for (let i = 0; i < checkArr.length; i++) { //for loop from zero to the array length

          if (!newArr.includes(checkArr[i])) { //if the new array NOT includes the number at index i then push it to the new array.
               newArr.push(checkArr[i]);
          }
     }

     return newArr;
}

const arr = [1, 1, 1, 1, 1, 1, 1, 43, 32, 43, 2]; //Array of the numbers
const result = Removeduplicates(arr); //passing the numbers to the function

console.log(result); //printing the results.
