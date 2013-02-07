describe("Probe", function() {

  var probe;

  beforeEach(function() {
    probe = new Probe();
  });

  it("has a maintenance cycle", function() {   
    expect(probe.needsMaintenance()).toBeTruthy();
    probe.doMaintenance();    
    expect(probe.needsMaintenance()).toBeFalsy();
  });


});

describe("Alphabet", function() {

  var alphabet;

  beforeEach(function() {
    alphabet = new Alphabet();
  });

  it("gives you the letter you want", function() {   
    expect(alphabet.giveMeAn('a').toCaps()).toEqual('A');
    expect(alphabet.giveMeAn('C').toLower()).toEqual('c');
  });

});