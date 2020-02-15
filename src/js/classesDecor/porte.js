class porte extends Objet {
    couleur = "#610303";
    type = "porte";

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
            if(this.type == "porteD"){
                porteD = []
            }
            if(this.type == "porteD1"){
                porteD1 = []
            }
            if(this.type == "porteD3"){
                porteD3 = []
            }
            if(this.type == "porteD4"){
                porteD4 = []
            }
            if(this.type == "porteD5"){
                porteD5 = []
            }
            if(this.type == "porteD6"){
                porteD6 = []
            }
        }
    }
    collisionEntréeHup(hup){
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirEntréeDonjon(hup)
      }
    }
    collisionPorteHup(hup,portes){
        if ( hup.x==this.x+taille && (hup.y >=  this.y-8 && hup.y<= this.y+8) && this.etat == true){
          moveg = false;
          this.ouvrirPorte(hup);
        }
      if ( hup.x==this.x-taille && (hup.y >=  this.y-8 && hup.y<= this.y+8) && this.etat == true){
          moved = false;
          this.ouvrirPorte(hup);
      }
      if( hup.y==this.y-taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveb = false;
          this.ouvrirPorte(hup);
      }
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirPorte(hup);
      }
    }
    }
