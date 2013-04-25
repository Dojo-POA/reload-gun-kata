var MAX_BULLETS = 5;

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
    return 'BANG';
  }
  
  return 'CLICK';
};

Gun.prototype.hasBullets = function(){
  return this.numberOfBullets > 0;
};
  

exports.Gun = Gun;
