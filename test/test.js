var expect = require("chai").expect;
var sinon = require("sinon");
var Gun = require('../lib/gun').Gun;

var clock;

before(function () { clock = sinon.useFakeTimers(); });
after(function () { clock.restore(); });

describe('A gun', function(){
  describe('by default', function(){
    it("should have 5 bullets", function() {
      var gun = new Gun();
      expect(gun.numberOfBullets).to.equal(5);
    });

    it("should not have more than 5 bullets", function() {
        var gun = new Gun(6);
        expect(gun.numberOfBullets).to.equal(5);
    });
  });
  
  describe('when shoting', function(){
    it("should decreases the number of bullets", function() {
      var gun = new Gun(1);
      gun.fire();
      expect(gun.numberOfBullets).to.equal(0);
    });    
  });

  describe('reloading', function(){
    it("should reload after a while", function() {
      var gun = new Gun(1);
      gun.fire();
      clock.tick(3000);
      expect(gun.numberOfBullets).to.equal(5);
    });    
  });

})

describe('A Gun with bullets', function () {
  var gun = new Gun();
    it('should make BANG while firing', function () {
      expect(gun.fire()).to.equal("BANG");
    });      
});

describe('A Gun without bullets', function () {  
    it('should make CLICK while firing', function () {
      var gun = new Gun(0);
      expect(gun.fire()).to.equal("CLICK");
    });
});
