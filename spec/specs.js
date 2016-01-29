describe ("Pizza", function() {
  it("will generate a price based on size", function() {
    var testPizza = new Pizza(true);
    expect(testPizza.sizePizza).to.equal(true);
  });

  it("will modify price based on number of toppings selected", function(){
    var testTopping = new Pizza("Large", 3);
    expect(testTopping.price()).to.equal(20);
  });
});
