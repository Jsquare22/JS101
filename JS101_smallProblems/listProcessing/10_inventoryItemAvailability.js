function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}
function isItemAvailable (inventoryID, transactions) {
  let stock = transactionsFor(inventoryID, transactions);
  let movingIn = movingItems(stock,"in");
  let movingOut = movingItems(stock,"out");
  if (movingIn > movingOut || movingIn === movingOut) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function movingItems (items,movementValue) {
  let movingStock = items.filter(inventory => inventory.movement === `${movementValue}`);
  let sum = movingStock.reduce((total,cur) => {
    return total + cur.quantity;
  },0);
  return sum;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
console.log("____________________");
isItemAvailable(103, transactions);     // false
console.log("____________________");
isItemAvailable(105, transactions);     // true
console.log("____________________");


// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]