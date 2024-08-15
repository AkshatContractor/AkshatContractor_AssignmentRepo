// Q9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.

function Smallest(n) { //taking the user inputs
     let number = n; //storing the array in the new varible number
     if (number.length === 0) { //base case: is array is empty then return null
          return null;
     }

     let small = number[0]; //initlize the small varible with number present at index of zero here it it 11.

     for (let i = 1; i < number.length; i++) { //for loop runnig from zero to the array length
          if (number[i] < small) { //comparint the index number with the small element
               small = number[i]; //if it is less then then number present at index i becomes the new small.
          }
     }

     return small;
}

let arr = [11, 255, 33, 454, 5]; //array of the numbers.
let result = Smallest(arr); //passing the array into the function

console.log("The smallet number in array is " + result); //printing the results.
