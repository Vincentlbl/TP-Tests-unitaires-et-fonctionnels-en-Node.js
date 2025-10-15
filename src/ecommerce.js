class Basket {
  constructor(items = [], totalPrice = 0) {
    this.items = items;
    this.totalPrice = totalPrice;
  }
}

function addToBasket(basket, item) {
  basket.items.push(item);
  basket.totalPrice += item.price;
}

function removeFromBasket(basket, item) {
  const index = basket.items.findIndex(i => i.name === item.name);
  if (index >= 0) {
    basket.items.splice(index, 1);
    basket.totalPrice -= item.price;
  }
}

function transactionAllowed(userAccount, priceToPay) {
  return userAccount.balance >= priceToPay;
}

function payBasket(userAccount, basket) {
  if (transactionAllowed(userAccount, basket.totalPrice)) {
    userAccount.balance -= basket.totalPrice;
    console.log('Paiement du panier réussi');
  } else {
    console.log('Paiement du panier échoué');
  }
}


module.exports = { Basket, addToBasket, removeFromBasket, transactionAllowed, payBasket };
