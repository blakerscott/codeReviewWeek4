describe ("Pizza", function() {
  it("will generate a price based on size", function() {
    var testPizza = new Pizza("Medium", "");
    expect(testPizza.price()).to.equal(15);
  });

  it("will modify price based on number of toppings selected", function(){
    var testPizza = new Pizza("Large", ["Extra Cheese","Pineapple","Mushrooms"]);
    expect(testPizza.price()).to.equal(20);
  });
});
