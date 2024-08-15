// Q5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.

function calculateTime(n) { //Taking the value as an argument

     const startTime = performance.now(); //using in-built perfomance function.


     let sum = 0; //intialise sum as zeco
     for (let i = 1; i <= n; i++) {
          sum += i;
          console.log(sum) //calculation total sum
     }


     const endTime = performance.now(); //again using performance function but after the evalution of for loop


     const timeInSeconds = (endTime - startTime) / 1000; //converting into the seconds


     return timeInSeconds; //return time in seconds
}


const n = 10; //input user inputs.
const timeTaken = calculateTime(n); //passing the value to the function.
console.log(`Time taken to calculate the sum from 1 to ${n}: ${timeTaken} seconds`); 

