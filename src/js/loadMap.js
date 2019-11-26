
// ----- FONCTIONS DE SAUVEGARDE DE LA MAP ---------- //

/* INSTRUCTIONS
-> Actuellement, la map numéro 1 est sauvegardée en json dans la variable sauvegarde
-> Si plusieurs map, on enregistrerait toutes les maps dans un tableau maps (cf ligne en commentaire)
-> Pour l'instant on reste sur une seule map, qu'on affiche en cliquant sur Charger la map

*/

// "nom de la map actuelle", "gauche","gauche string","droite","droite string","haut","haut string","bas","bas string"

var maps = [["map1",map1,"map1",map11,"map11",map1,"map1",map1,"map1"],
["map11",map1,"map1",map12,"map12",map11,"map11",map11,"map11"],
["map12",map11,"map11",map13,"map13",map12,"map12",map12,"map12"],
["map13",map12,"map12",map14,"map14",map13,"map11",map13,"map13"],
["map14",map13,"map13",map14,"map14",map14,"map14",map14,"map14"]];


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
       else if(mapToLoad[i][j].couleur == solMap.couleur){
        map[i][j] = new sol(i*taille,j*taille);
       }
       
      }

      
    }
    map[24]= mapToLoad[24][0];

    
    
  }

  function changeMap(){
    
    /* ----- POUR ALLER A DROITE --------*/

    if (hup.x >= 768){
      for(var i=0; i<maps.length; i++){
        if(maps[i][0] == map[24]){
          if(maps[i][4]==maps[i][0]){
            hup.x = 736;
          }
          else{
          loadMap(maps[i][3]);
          hup.x = 0;
          break;
          
          }
          
        }
      }
    }

    /*---------- POUR ALLER À GAUCHE ---------*/

    if (hup.x < 0){
      
      for(var i=0; i<maps.length; i++){
        
        if(maps[i][0] == map[24]){
          if(maps[i][2]==maps[i][0]){
            hup.x = 0;
          }
          else{
          loadMap(maps[i][1]);
          hup.x = 736;
          break;
          
          }
          
        }
      }
    }
    /*------------ POUR ALLER EN HAUT -------*/

    if (hup.y <= 0){
      for(var i=0; i<maps.length; i++){
        if(maps[i][0] == map[24]){
          if(maps[i][6]==maps[i][0]){
            hup.y = 0;
          }
          else{
          loadMap(maps[i][5]);
          hup.y = 540;
          break;
          
          }
          
        }
      }
    }

    /*-------- POUR ALLER EN BAS --------*/

    if (hup.y >= 576){
      
      for(var i=0; i<maps.length; i++){
        
        if(maps[i][0] == map[24]){
          if(maps[i][8]==maps[i][0]){
            hup.y = 576;
          }
          else{
          loadMap(maps[i][7]);
          hup.y = 0;
          break;
          
          }
          
        }
      }
    }
  }

  
  // ----- FIN FONCTIONS SAUVEGARDE ----------//