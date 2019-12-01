
// ----- FONCTIONS DE SAUVEGARDE DE LA MAP ---------- //

/* INSTRUCTIONS
-> Les maps sont en JSON dans sauvegardeMaps.js
-> Les différentes maps sont enregistrées dans un tableau ici
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
["A2key",A2key,"A2key",A2,"A2",A2key,"A2key",A2key,"A2key"],
// -------LIGNE 1 --------------- //
["C1",C1,"C1",D1,"D1",C1,"C1",C1sword,"C1sword"],
["D1",C1,"C1",E1,"E1",D1,"D1",D1,"D1"],
["E1",D1,"D1",F1,"F1",E1,"E1",E1,"E1"],
["F1",E1,"E1",G1,"G1",F2,"F2",F1,"F1"],
["G1",F1,"F1",H1,"H1",G2,"G2",G1,"G1"],
["H1",G1,"G1",I1,"I1",H2,"H2",H1,"H1"],
["I1",H1,"H1",J1,"J1",I2,"I2",I1shield,"I1shield"],
["J1",I1,"I1",K1,"K1",J2,"J2",J1,"J1"],
["K1",J1,"J1",L1,"L1",K2,"K2",K1,"K1"],
["L1",K1,"K1",L1,"L1",L2,"L2",L1,"L1"],
["M1",M1,"M1",M1,"M1",M2,"M2",M1,"M1"],
// -------LIGNE 2 --------------- //
["A2",A2key,"A2key",B2,"B2",A2,"A2",A2,"A2"],
["B2",A2,"A2",C2,"C2",B3,"B3",B2,"B2"],
["C2",B2,"B2",D2,"D2",C3,"C3",C1,"C1"],
["D2",C2,"C2",E2,"E2",D3,"D3",D1,"D1"],
["E2",D2,"D2",F2,"F2",E3,"E3",E1,"E1"],
["F2",E2,"E2",G2,"G2",F3,"F3",F1,"F1"],
["G2",F2,"F2",H2,"H2",G3,"G3",G1,"G1"],
["H2",G2,"G2",I2,"I2",H3,"H3",H1,"H1"],
["I2",H2,"H2",J2,"J2",I3,"I3",I1,"I1"],
["J2",I2,"I2",J2,"J2",J2,"J2",J1,"J1"],
["K2",J2,"J2",L2,"L2",K3,"K3",K1,"K1"],
["L2",K2,"K2",L2,"L2",L3,"L3",L1,"L1"],
["M2",M2,"M2",M2,"M2",M2,"M2",M1,"M1"],
// -------LIGNE 3 --------------- //
["B3",B3,"B3",C3,"C3",B4,"B4",B2,"B2"],
["C3",B3,"B3",D3,"D3",C4,"C4",C2,"C2"],
["D3",C3,"C3",E3,"E3",D4,"D4",D2,"D2"],
["E3",D3,"D3",F3,"F3",E4,"E4",E2,"E2"],
["F3",E3,"E3",G3,"G3",F4,"F4",F2,"F2"],
["G3",F3,"F3",H3,"H3",G4,"G4",G2,"G2"],
["H3",G3,"G3",I3,"I3",H4,"H4",H2,"H2"],
["I3",H3,"H3",J3,"J3",I4,"I4",I2,"I2"],
["J3",I3,"I3",K3,"K3",J4,"J4",J2,"J2"],
["K3",J3,"J3",L3,"L3",K4,"K4",K2,"K2"],
["L3",K3,"K3",L3,"L3",L4,"L4",L2,"L2"],
// -------LIGNE 4 --------------- //
["B4",B4,"B4",C4,"C4",B4,"B4",B3,"B3"],
["C4",B4,"B4",D4,"D4",C4,"C4",C3,"C3"],
["D4",C4,"C4",E4,"E4",D4,"D4",D3,"D3"],
["E4",E4,"E4",F4,"F4",E4,"E4",E3,"E3"],
["F4",E4,"E4",G4,"G4",F4,"F4",F3,"F3"],
["G4",F4,"F4",H4,"H4",G4,"G4",G3,"G3"],
["H4",G4,"G4",I4,"I4",H4,"H4",H3,"H3"],
["I4",H4,"H4",J4,"J4",I4,"I4",I3,"I3"],
["J4",I4,"I4",K4,"K4",J4,"J4",J3,"J3"],
["K4",J4,"J4",L4,"L4",K4,"K4",K3,"K3"],
["L4",K4,"K4",L4,"L4",L4,"L4",L3,"L3"],
];


function loadMap(mapToLoad){
  

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