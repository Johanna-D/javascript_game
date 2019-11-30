
// ----- FONCTIONS DE SAUVEGARDE DE LA MAP ---------- //

/* INSTRUCTIONS
-> Actuellement, la map numéro 1 est sauvegardée en json dans la variable sauvegarde
-> Les différentes maps sont enregistrées dans un tableau
-> Quand on enregistre une map dans le tableau, on enregistre aussi celles qui l'entourent afin de pouvoir
se déplacer de map en map

*/


var solMap = new sol();
var eauMap = new eau();
var herbeMap = new herbe();
var arbreMap = new arbre();
var rocheMap = new roche();
var solRocheMap = new solRoche();
var eauProfondeMap = new eauProfonde();
var neigeMap = new neige();
var fleurMap = new fleur();

// "nom de la map actuelle", "gauche","gauche string","droite","droite string","haut","haut string","bas","bas string"


var maps = [
// -------MAPS ANNEXES ---------- //
["C1sword",C1sword,"C1sword",C1sword,"C1sword",C1,"C1",C1sword,"C1sword"],
["I1shield",I1shield,"I1shield",I1shield,"I1shield",I1,"I1",I1shield,"I1shield"],
// -------LIGNE 1 --------------- //
["C1",C1,"C1",D1,"D1",C1,"C1",C1sword,"C1sword"],
["D1",C1,"C1",E1,"E1",D1,"D1",D1,"D1"],
["E1",D1,"D1",F1,"F1",E1,"E1",E1,"E1"],
["F1",E1,"E1",G1,"G1",G1,"G1",F1,"F1"],
["G1",F1,"F1",H1,"H1",G1,"G1",G1,"G1"],
["H1",G1,"G1",I1,"I1",H2,"H2",H1,"H1"],
["I1",H1,"H1",J1,"J1",I2,"I2",I1shield,"I1shield"],
["J1",I1,"I1",K1,"K1",J2,"J2",J1,"J1"],
["K1",J1,"J1",L1,"L1",K2,"K2",K1,"K1"],
["L1",K1,"K1",L1,"L1",L2,"L2",L1,"L1"],
["M1",M1,"M1",M1,"M1",M2,"M2",M1,"M1"],
// -------LIGNE 2 --------------- //
["H2",H2,"H2",I2,"I2",H2,"H2",H1,"H1"],
["I2",H2,"H2",J2,"J2",I2,"I2",I1,"I1"],
["J2",I2,"I2",J2,"J2",J2,"J2",J1,"J1"],
["K2",J2,"J2",L2,"L2",K2,"K2",K1,"K1"],
["L2",K2,"K2",L2,"L2",L2,"L2",L1,"L1"],
["M2",M2,"M2",M2,"M2",M2,"M2",M1,"M1"],
];


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
       else if(mapToLoad[i][j].couleur == solRocheMap.couleur){
        map[i][j] = new solRoche(i*taille,j*taille);
       }
       else if(mapToLoad[i][j].couleur == eauProfondeMap.couleur){
        map[i][j] = new eauProfonde(i*taille,j*taille);
       }
       else if(mapToLoad[i][j].couleur == neigeMap.couleur){
        map[i][j] = new neige(i*taille,j*taille);
       }
       else if(mapToLoad[i][j].couleur == fleurMap.couleur){
        map[i][j] = new fleur(i*taille,j*taille);
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

    if (hup.y < 0){
      for(var i=0; i<maps.length; i++){
        if(maps[i][0] == map[24]){
          if(maps[i][6]==maps[i][0]){
            hup.y = 0;
          }
          else{
          loadMap(maps[i][5]);
          hup.y = 544;
          break;
          
          }
          
        }
      }
    }

    /*-------- POUR ALLER EN BAS --------*/

    if (hup.y >= 576){
      console.log("test");
      
      for(var i=0; i<maps.length; i++){
        
        if(maps[i][0] == map[24]){
          if(maps[i][8]==maps[i][0]){
            hup.y = 544;
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