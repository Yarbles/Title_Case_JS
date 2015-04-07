describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat POOP the donkey")).to.equal("Cat Poop the Donkey");
  });


  it("capitalizes the first letter of every word in a multi-word title", function() {
          expect(titleCase("tale of two cities")).to.equal("Tale of Two Cities");
    });

  it("capitalizes the first letter of every word in a title regardless of inputted capitalization", function() {
        expect(titleCase("tAlE Of TWo CITIES")).to.equal("Tale of Two Cities");
  });

  it("capitalizes the first letter of every word, except for little words we've defined", function() {
        expect(titleCase("of mice AND men")).to.equal("Of Mice and Men");
  });

  it("capitalizes the first letter of every word, except for little words we've defined, unless a little word is the first word", function() {
        expect(titleCase("of mice and men")).to.equal("Of Mice and Men");
  });

});
