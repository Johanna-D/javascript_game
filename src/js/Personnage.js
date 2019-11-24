class Personnage {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.taille = 32;
    this.vg = 32;
    this.vd = 32;
    this.vh = 32;
    this.vb = 32;
  }
  collisiondecor(map) {
    
    if ( this.x==map.x+map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
        moveg = false;
    if ( this.x==map.x-map.taille && (this.y >=  map.y-8 && this.y<= map.y+8))
        moved = false;
    if( this.y==map.y-map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
        moveb = false;
    if( this.y==map.y+map.taille && (this.x >=  map.x-8 && this.x<= map.x+8))
        moveh = false;
  }
  draw() {
    ctx.save();
    ctx.fillStyle = this.couleur;
    ctx.fillRect(this.x, this.y, this.taille, this.taille);
    ctx.restore();
  }
}


