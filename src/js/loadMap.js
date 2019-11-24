
// ----- FONCTIONS DE SAUVEGARDE DE LA MAP ---------- //

/* INSTRUCTIONS
-> Actuellement, la map numéro 1 est sauvegardée en json dans la variable sauvegarde
-> Si plusieurs map, on enregistrerait toutes les maps dans un tableau maps (cf ligne en commentaire)
-> Pour l'instant on reste sur une seule map, qu'on affiche en cliquant sur Charger la map

*/

function loadMap(mapToLoad){
    
    //maps.push(sauvegarde); A UTILISER SI PLUSIEURS MAPS
    
    for (var i = 0; i < 24; i++)
    {
      
      for(var j = 0; j < 18; j++)
     {
       if (mapToLoad[i][j].couleur == eauMap.couleur){
        map[i][j] = new eau(i*taille,j*taille);
       }
       else if (mapToLoad[i][j].couleur == herbeMap.couleur){
        map[i][j] = new herbe(i*taille,j*taille);
       }
       else if (mapToLoad[i][j].couleur == rocheMap.couleur){
        map[i][j] = new roche(i*taille,j*taille);
       }
       else if (mapToLoad[i][j].couleur == arbreMap.couleur){
        map[i][j] = new arbre(i*taille,j*taille);
       }
       else{
        map[i][j] = new sol(i*taille,j*taille);
       }
      }
    }
    
  }

  
  // ----- FIN FONCTIONS SAUVEGARDE ----------//