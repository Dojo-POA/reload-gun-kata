function Gun() {
  this.numberOfBullets = this.MAX_BULLETS;
}

Gun.prototype.MAX_BULLETS = 5;

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
