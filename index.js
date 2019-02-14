var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(item = {itemName: item,
  itemPrice: Math.floor(Math.random() * 100)})
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  var x = [];
  for(var counter = 0; counter < cart.length; counter++) {
    x.push( `${cart[counter].itemName} at $${cart[counter].itemPrice}`)
    let y = `In your cart, you have ${x}`
  } if (cart.length === 0) {
    return 'Your shopping cart is empty.'
} else if (cart.length === 1) {
  return `${y}.`
} else if (counter % 2 === 0){
  return `In your cart, you have ${x}, and ${x} `
}
}

function total() {

  var cartTotal = 0
  cart.forEach(function (price) {
  cartTotal = cartTotal + price.itemPrice
  })
  return cartTotal
  }

function removeFromCart(item) {
  /* function itemMatch(item) {
    return item === item
  } */

  var index = cart.findIndex(function (item){
    return cart.itemName === item
  })
  return cart//[index]

  //var removed = cart.splice(index, 1)
  //return removed
/*} else {
  return 'That item is not in your cart.'
}*/
}

function placeOrder(cardNumber) {
  // write your code here
}
