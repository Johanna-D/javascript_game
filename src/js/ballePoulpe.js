class ballePoulpe{
  constructor(x,y,angle){
      this.x = x;
      this.y = y;
      this.taille = 32;
      this.etat = true;
      this.angle = angle;
      }
  drawTir(){
    if(this.angle ==0){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x, this.y+16, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==180){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+32,this.y+16, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==90){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+16, this.y+32, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
    if(this.angle ==360){
      ctx.beginPath();
      ctx.fillStyle='black';
      ctx.arc(this.x+16, this.y, 8, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
  collisionTirDecor(ennemi,balles){
    if(this.angle == 180){
      if(map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof murGauche ||map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof murDroit ||map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof murHaut ||map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof murBas ||map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof roche || map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof eau || map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof eauProfonde ||map[Math.floor((this.x+8)/32)+1][Math.floor(this.y/32)] instanceof arbre || this.x >canvas.width-40){
        if(ennemi.tir >0){
          ennemi.tir -= 1;
        }
        ennemi.balles.splice(balles.indexOf(this),1);
        return false;
      }
      else{return true;}
    }
    if(this.angle == 0){
      if(map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof murGauche || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof murDroit || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof murHaut || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof murBas || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof roche || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof eau || map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof eauProfonde ||map[Math.ceil((this.x-8)/32)-1][Math.ceil(this.y/32)] instanceof arbre || this.x <=12){
        if(ennemi.tir >0){
          ennemi.tir -= 1;
        }
        ennemi.balles.splice(balles.indexOf(this),1);
        return false;
      }
      else{return true;}
    }
    if(this.angle == 90){
      if(map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof murGauche || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof murDroit || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof murHaut || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof murBas || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof roche || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof eau || map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof eauProfonde ||map[Math.floor(this.x/32)][Math.floor((this.y+8)/32)+1] instanceof arbre || this.y >=canvas.height-104){
        if(ennemi.tir >0){
          ennemi.tir -= 1;
        }
        ennemi.balles.splice(balles.indexOf(this),1);
        return false;
      }
      else{return true;}
    }
    if(this.angle == 360){
      if(map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof murGauche || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof murDroit || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof murHaut || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof murBas || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof roche || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof eau || map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof eauProfonde ||map[Math.ceil(this.x/32)][Math.ceil((this.y-8)/32)-1] instanceof arbre || this.y <9){
        if(ennemi.tir >0){
          ennemi.tir -= 1;
        }
        ennemi.balles.splice(balles.indexOf(this),1);
        return false;
      }
      else{return true;}
    }
  }
  //Hitbox hup demi rectangle
  collisionTirHup(ennemi,hup,balles){
      if(hup.angle == 0){
        if(hup.x > (this.x)-taille && hup.x < (this.x)+taille && hup.y>(this.y)-taille && hup.y < (this.y)+taille && hup.invinsibilite == false){
          hup.red =setInterval("hup.image.src = 'js/hupGaucheR.png'", 50);
          hup.black =setInterval("hup.image.src = 'js/hupGauche.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          hup.invinsibilite = true;
          hup.vie = hup.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
          if(ennemi.tir >0){
            ennemi.tir -= 1;
          }
          ennemi.balles.splice(balles.indexOf(this),1);
          return false;
        }
        else{return true;}
      }
      if(hup.angle == 180){
        if(hup.x > (this.x)-taille && hup.x < (this.x)+taille && hup.y>(this.y)-taille && hup.y < (this.y)+taille && hup.invinsibilite == false){
          hup.red =setInterval("hup.image.src = 'js/hupDroitR.png'", 50);
          hup.black =setInterval("hup.image.src = 'js/hupDroite.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          hup.invinsibilite = true;
          hup.vie = hup.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
          if(ennemi.tir >0){
            ennemi.tir -= 1;
          }
          ennemi.balles.splice(balles.indexOf(this),1);
          return false;
        }
        else{return true;}
      }
      if(hup.angle == 90){
        if(hup.x > (this.x)-taille && hup.x < (this.x)+taille && hup.y>(this.y)-taille && hup.y < (this.y)+taille && hup.invinsibilite == false){
          hup.red =setInterval("hup.image.src = 'js/hupFaceR.png'", 50);
          hup.black =setInterval("hup.image.src = 'js/hupFace.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          hup.invinsibilite = true;
          hup.vie = hup.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
          if(ennemi.tir >0){
            ennemi.tir -= 1;
          }
          ennemi.balles.splice(balles.indexOf(this),1);
          return false;
        }
        else{return true;}
      }
      if(hup.angle == 360){
        if(hup.x > (this.x)-taille && hup.x < (this.x)+taille && hup.y > (this.y)-taille && hup.y < (this.y)+taille && hup.invinsibilite == false){
          hup.red =setInterval("hup.image.src = 'js/hupDosR.png'", 50);
          hup.black =setInterval("hup.image.src = 'js/hupDos.png'", 100);
          setTimeout("clearInterval(hup.red)",1201);
          setTimeout("clearInterval(hup.black)",1201);
          hup.invinsibilite = true;
          hup.vie = hup.vie - 1;
          setTimeout("hup.invinsibilite = false",1201);
          if(ennemi.tir >0){
            ennemi.tir -= 1;
          }
          ennemi.balles.splice(balles.indexOf(this),1);
          return false;
        }
        else{return true;}
      }
    }
  moveTir(ennemi,hup,balles){
    if(this.angle == 180 && this.collisionTirDecor(ennemi,balles) && this.collisionTirHup(ennemi,hup,balles)){
      this.x += 4;
       }
    if(this.angle == 0 && this.collisionTirDecor(ennemi,balles) && this.collisionTirHup(ennemi,hup,balles)){
      this.x -= 4;
    }
    if(this.angle == 90 && this.collisionTirDecor(ennemi,balles) && this.collisionTirHup(ennemi,hup,balles)){
      this.y += 4;
    }
    if(this.angle == 360 && this.collisionTirDecor(ennemi,balles) && this.collisionTirHup(ennemi,hup,balles)){
      this.y -= 4;
    }
  }
}
