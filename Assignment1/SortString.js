// Q15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.

function SortString(arr) { //array as an argument

     let sortedArray = arr.sort(); //in built sorting function that sort in alphabetical order.

          return sortedArray;

}



const arrayString = ["Zone", "Belgaum", "Ahmedbad", "Mumbai", "Chenai", "Delhi", "Kolkata", "Hyderabad", "Dharamshala"]; //array containg strings.

console.log(SortString(arrayString)); //printing the result using funtion and passing the array as an argument.