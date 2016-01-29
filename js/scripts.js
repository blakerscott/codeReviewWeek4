function Pizza(sizePizza, topping) {
    this.sizePizza = sizePizza;
    this.topping = topping;

}


Pizza.prototype.price = function() {
  var startingPrice = 10;
  for (var i = 0; i < this.topping; i++) {
    startingPrice += 1;
  }

  if (this.sizePizza === "Small") {
    startingPrice += 3;
  }

  if (this.sizePizza === "Medium") {
    startingPrice += 5;
  }

  if (this.sizePizza === "Large") {
    startingPrice += 7;
  }

  return startingPrice;
};
