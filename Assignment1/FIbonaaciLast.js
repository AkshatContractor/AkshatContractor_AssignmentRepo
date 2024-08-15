// Q11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence


function fibonacciRecursive(n) { //taking the user input as an argument.
    
     if (n <= 0) return 0; //base case if 0 given then return the zero
     if (n === 1) return 1; //base case if 1 comes then return the 1
     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
 

 const result = fibonacciRecursive(15); //passing the value to the function
 console.log(result); //printing the results.
 