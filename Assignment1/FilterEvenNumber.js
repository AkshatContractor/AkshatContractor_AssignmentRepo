// Q8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.

function FilterEven(n) { //taking the user value

     let number = n; //storing the value in the number varible
     let FilterArray = []; //intitalizing the empty array
     for (let i = 0; i < number.length; i++) { //for loop running from zero to the array length
          if (number[i] % 2 === 0) { // remainder zero will result in pusing the number in the empty array
               FilterArray.push(number[i]);
          }
     }

     return FilterArray; //return the new array

}



const arr = [21, 14, 23, 24, 3, 456, 23, 65]; //array of numbers

const result = FilterEven(arr); //pssing the value in the Filtereven number

console.log("The FIlteres Array is: " + "[" + result + "]"); //printing the results