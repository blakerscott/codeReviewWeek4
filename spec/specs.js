describe ("Pizza", function() {
  it("will generate a price based on size", function() {
    var testPizza = new Pizza(true);
    expect(testPizza.sizePizza).to.equal(true);
  });
});
