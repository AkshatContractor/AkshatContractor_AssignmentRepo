// Q14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.

function findCommonElements(arr1, arr2) { //taking two array as an argument
     let commonElements = []; //new empty array for storing common elements in the array.
     for (let i = 0; i < arr1.length; i++) { //for loop running from zero to the array length.
         if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) { //array 2 contains the number present in the array 1 AND new common element array does not contain the value then it pushes.
             commonElements.push(arr1[i]);
         }
     }
     return commonElements;
 }
 

 const array1 = [1, 2, 3, 4, 5];  //array 1
 const array2 = [4, 5, 6, 5, 3, 7, 8]; //array 2
 const result = findCommonElements(array1, array2); //passing two array to function
 
 console.log(result); //printing the result
 