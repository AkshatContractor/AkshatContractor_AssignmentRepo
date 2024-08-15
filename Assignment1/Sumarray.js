// Q7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.

function SumofArray(n) { //taking the value from the user

     let number = n //passing the value to the new varible named number
     let sum = 0; //initialising the sum to the zero
     for (let i = 0; i < number.length; i++) { //for loop fromzero to the length of the array
          sum += number[i]; //sum = sum + number present at index of i
     }
     return sum; //return of the sum

}



const num = [1, 2, 3, 34, 5, 6]; // array of the numbers

const result = SumofArray(num); // passing the number array to the sumofarray function.
console.log(result); //printing the final result.