// function polindrome(smth) {
//   let word = '';
//     for (let i = smth.length - 1; i >= 0; i--) {
//         word += smth[i];
//     }

//     if (word.startsWith()==word.endsWith()) {
//         console.log(word);
        
//     }
//     return smth === word;

// }
// console.log(polindrome("нос"))
// console.log(polindrome("казак"))


let categories = [
  { id: 1, name: "Fast-Food" },
  { id: 2, name: "Drinks" },
  { id: 3, name: "Desserts" },
  { id: 4, name: "Salads" },
  { id: 5, name: "Pizza" },
];

let foods = [
  { id: 1, name: "Burger", catId: 1, price: 200 },
  { id: 2, name: "Cola", catId: 2, price: 100 },
  { id: 3, name: "Ice Cream", catId: 3, price: 150 },
  { id: 4, name: "Caesar Salad", catId: 4, price: 250 },
  { id: 5, name: "Pepperoni Pizza", catId: 5, price: 800 },
];



function getFoodsByCategory(){

 
    for (let i = 0; i < categories.length; i++) {
      console.log(categories[i].name + ":");

      for (let j = 0; j < foods.length; j++) {
        if (foods[j].catId === categories[i].id) {
          console.log("  " + foods[j].name);
        }
      }
    }
}

getFoodsByCategory();