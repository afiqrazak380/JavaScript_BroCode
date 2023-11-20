
// Map = object that holds key-value pair of any data types

const shop = new Map([
  ["hat", 20],
  ["pants", 40],
  ["shoes", 60],
  ["jacket", 90]
]);


// let chartList = 0;

// chartList += shop.get("jacket"); <- get the value using key
// chartList += shop.get("hat");    <- get the value using key
// console.log(chartList);

// shop.set("slipper", 10); <- add item

//shop.delete("hat"); <- delete item

//console.log(shop.has("jacket")); <- to check for key

//console.log(shop.size) <- to check the size


shop.forEach((value, key) => (console.log(`${key} $${value}`)));
