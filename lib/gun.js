var MAX_BULLETS = 5;
var RELOAD_TIME = 3000;

function Gun(numberOfBullets) {
  if (numberOfBullets === undefined || numberOfBullets > MAX_BULLETS) {
    this.numberOfBullets = MAX_BULLETS;
  }
  else {
    this.numberOfBullets = numberOfBullets;
  }
}

Gun.prototype.fire = function() {

  if (this.hasBullets()) {
    this.numberOfBullets--; 

    if(!this.hasBullets()){
      this.reload();
    }
    return 'BANG';
  }

  return 'CLICK';
};

Gun.prototype.hasBullets = function(){
  return this.numberOfBullets > 0;
};

Gun.prototype.reload = function() {
  setTimeout(function() { 
    this.numberOfBullets = MAX_BULLETS; 
  }.bind(this), RELOAD_TIME);
}


exports.Gun = Gun;
