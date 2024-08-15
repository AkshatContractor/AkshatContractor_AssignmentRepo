// Q3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.


function FindLargestElement(arr) {
     if (arr.length === 0) return undefined; // Handle empty array case
 
     const largest = Math.max(...arr); // Use the spread operator to pass array elements as individual arguments
     return largest;
 }
 
 const input = [12, 23, 5675, 6323, 6, 346]; //input as array
 const result = FindLargestElement(input); //passing the value in the function
 
 console.log("The largest number is: " + result); //printing the result.
 