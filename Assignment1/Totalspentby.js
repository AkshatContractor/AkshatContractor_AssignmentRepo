// Q2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.

function calculateTotalSpentByCategory(transactions) {
     const categoryTotals = {}; //empty array

     transactions.forEach(({ category, price }) => {
          categoryTotals[category] = (categoryTotals[category] || 0) + price; //total count
     }); 

     //map function
     return Object.keys(categoryTotals).map(category => ({
          category,
          totalSpent: categoryTotals[category]
     }));
}

//Array containing itemname and category

const transactions = [
     { itemName: "Item 1", category: "Tickets", price: 10 },
     { itemName: "Item 2", category: "Movie", price: 15 },
     { itemName: "Item 3", category: "Food", price: 5 },
     { itemName: "Item 4", category: "Entertainment", price: 20 },
     { itemName: "Item 5", category: "Netflix", price: 10 },
     { itemName: "Item 6", category: "Tickets", price: 40 },
     { itemName: "Item 7", category: "Food", price: 60 },
];

console.log(calculateTotalSpentByCategory(transactions)); //print the results.