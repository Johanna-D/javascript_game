class coeur extends Objet {
    couleur = "#fc0362";
    type = "coeur";

    ramasseCoeur(objets,hup){
      if(this.x > hup.x-taille && this.x < hup.x+taille && this.y>hup.y-taille && this.y < hup.y+taille){
        if(hup.vie == 2.5){
          hup.vie = hup.vie+0.5;
        }
        if(hup.vie <3){
        hup.vie = hup.vie+1;
        }
        objets.splice(objets.indexOf(this),1);
      }
    }


}
