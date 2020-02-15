class porteBoss extends Objet {
    couleur = "#610330";
    type = "porteboss";

        ouvrirPorteBoss(hup){
        if(hup.cleBoss == 1 && this.etat ==true){
            this.etat = false;
            hup.cleBoss -= 1;
            portesBoss = [];
        }
    }
        collisionPorteBossHup(hup){
      if( hup.y==this.y+taille && (hup.x >=  this.x-8 && hup.x<= this.x+8) && this.etat == true){
          moveh = false;
          this.ouvrirPorteBoss(hup)
      }
    }
}
