var expect = require("chai").expect;
var sinon = require("sinon");

var Gun = require('../lib/gun').Gun;

describe('Gun', function() {
  describe('when shooting', function() {
    it('should make BANG', function(){
      var gun = new Gun();

      expect(gun.fire()).to.equal("BANG");
    });
    
    it('should make CLICK when there are no bullets', function(){
      var gun = new Gun();
      shootFiveTimes(gun);
      expect(gun.fire()).to.equal("CLICK");
    });     
    
    var shootFiveTimes = function(gun){
      var i;
      for (i = 0; i < gun.MAX_BULLETS; i++){
        gun.fire();
      }
    }
  });
});
