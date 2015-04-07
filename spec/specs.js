describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });


  it("capitalizes the first letter of every word in a multi-word title", function() {
          expect(titleCase("tale of two cities")).to.equal("Tale Of Two Cities");
    });


});
