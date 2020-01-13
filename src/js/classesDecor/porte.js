class porte extends Objet {
    couleur = "#610303";

    ouvrirEntréeDonjon(hup){
        if(hup.clefs >= 3 && this.etat ==true){
            this.etat = false;
            hup.clefs -= 3;
            entrées = [];
        }
    }
    ouvrirPorte(hup){
        if(hup.clefs >= 1 && this.etat ==true){
            this.etat = false;
            hup.clefs -= 1;
            portes = [];
        }
    }
    ouvrirPorteBoss(hup){
        if(hup.clefBoss == 1 && this.etat ==true){
            this.etat = false;
            hup.cleBoss -= 1;
            porteBoss = [];
        }
    }
    collisionEntréeHup(hup){
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirEntréeDonjon(hup)
      }
    }
    collisionPorteHup(hup){
        if ( hup.x==this.x+taille && (hup.y >=  this.y-8 && hup.y<= this.y+8) && this.etat == true){
          moveg = false;
          this.ouvrirPorte(hup)
        }
      if ( hup.x==this.x-taille && (hup.y >=  this.y-8 && hup.y<= this.y+8) && this.etat == true){
          moved = false;
          this.ouvrirPorte(hup)
      }
      if( hup.y==this.y-taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveb = false;
          this.ouvrirPorte(hup)
      }
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirPorte(hup)
      }
    }
    collisionPorteBossHup(hup){
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirPorteBoss(hup)
      }
    }
    }
