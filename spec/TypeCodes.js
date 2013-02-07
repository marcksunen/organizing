describe("HumanMetabolism", function() {

  var metabolism;

  beforeEach(function() {
    metabolism = new HumanMetabolism();
  });

  it("needs calories based in complexion", function() {   
    metabolism.setComplexion(SKYNNY);    
    expect(metabolism.getDailyCalories()).toEqual(3000);
    
    metabolism.setComplexion(MORBID);    
    expect(metabolism.getDailyCalories()).toEqual(500);
    
  });


});
