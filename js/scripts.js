function Pizza(sizePizza, topping) {
    this.sizePizza = sizePizza;
    this.topping = topping;

}


var resetFields = function() {
  $("select#size").val("");
  $("input.toppingSelect").clear;
  $('input.toppingSelect').not(this).toppingSelect({checked: this.checked});
}



Pizza.prototype.price = function() {
  var Price = 10;

  if (this.sizePizza === "Large") {
    Price = Price + 7 + (this.topping.length * 1);
  }

  else if (this.sizePizza === "Medium") {
    Price = Price  + 5 + (this.topping.length * 1);
  }

  else if (this.sizePizza === "Small") {
    Price = Price  + 3 + (this.topping.length * 1);
  }

  else {
    Price = Price + (this.topping.length * 1);
  }

  return Price;
};


$(document).ready(function() {
  $("form#pizzaSelect").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedTopping = [];
    $("input:checked").each(function() {
      inputtedTopping.push($(this).val());
    });
    var newPizza = new Pizza(inputtedSize, inputtedTopping);
    console.log("Pizza Object: ", newPizza);
    $("ul#pizzaCost").append("<li>$" + newPizza.price() +".00</li>");
    resetFields();
    });

  });
