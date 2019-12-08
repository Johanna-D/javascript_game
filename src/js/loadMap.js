
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
var boisMap = new bois();
var gameoverMap = new gameover();

// "nom de la map actuelle", "gauche","gauche string","droite","droite string","haut","haut string","bas","bas string"


var maps = [
// -------MAPS ANNEXES ---------- //
["C1sword",C1sword,"C1sword",C1sword,"C1sword",C1,"C1",C1sword,"C1sword"],
["I1shield",I1shield,"I1shield",I1shield,"I1shield",I1,"I1",I1shield,"I1shield"],
["A2key",A2key,"A2key",A2,"A2",A2key,"A2key",A2key,"A2key"],
// -------LIGNE 1 --------------- //
["C1",C1,"C1",D1,"D1",C1,"C1",C1sword,"C1sword"],
["D1",C1,"C1",E1,"E1",D2,"D2",D1,"D1"],
["E1",D1,"D1",F1,"F1",E2,"E2",E1,"E1"],
["F1",E1,"E1",G1,"G1",F2,"F2",F1,"F1"],
["G1",F1,"F1",H1,"H1",G2,"G2",G1,"G1"],
["H1",G1,"G1",I1,"I1",H2,"H2",H1,"H1"],
["I1",H1,"H1",J1,"J1",I2,"I2",I1shield,"I1shield"],
["J1",I1,"I1",K1,"K1",J2,"J2",J1,"J1"],
["K1",J1,"J1",L1,"L1",K2,"K2",K1,"K1"],
["L1",K1,"K1",M1,"M1",L2,"L2",L1,"L1"],
["M1",L1,"L1",M1,"M1",M2,"M2",M1,"M1"],
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
["M2",M2,"M2",M2,"M2",M3,"M3",M1,"M1"],
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
["L3",K3,"K3",M3,"M3",L4,"L4",L2,"L2"],
["M3",L3,"L3",M3,"M3",M4,"M4",M2,"M2"],
// -------LIGNE 4 --------------- //
["B4",B4,"B4",C4,"C4",B4,"B4",B3,"B3"],
["C4",B4,"B4",D4,"D4",C4,"C4",C3,"C3"],
["D4",C4,"C4",E4,"E4",D4,"D4",D3,"D3"],
["E4",E4,"E4",F4,"F4",E5,"E5",E3,"E3"],
["F4",E4,"E4",G4,"G4",F5,"F5",F3,"F3"],
["G4",F4,"F4",H4,"H4",G5,"G5",G3,"G3"],
["H4",G4,"G4",I4,"I4",H5,"H5",H3,"H3"],
["I4",H4,"H4",J4,"J4",I5,"I5",I3,"I3"],
["J4",I4,"I4",K4,"K4",J5,"J5",J3,"J3"],
["K4",J4,"J4",L4,"L4",K5,"K5",K3,"K3"],
["L4",K4,"K4",M4,"M4",L5,"L5",L3,"L3"],
["M4",L4,"L4",M4,"M4",M5,"M5",M3,"M3"],
// -------LIGNE 5 --------------- //
["A5",A5,"A5",B5,"B5",A6,"A6",A5,"A5"],
["B5",A5,"A5",C5,"C5",B5,"B5",B5,"B5"],
["C5",B5,"B5",C5,"C5",C6,"C6",C5,"C5"],
["E5",E5,"E5",F5,"F5",E5,"E5",E4,"E4"],
["F5",E5,"E5",G5,"G5",F6,"F6",F4,"F4"],
["G5",F5,"F5",H5,"H5",G6,"G6",G4,"G4"],
["H5",G5,"G5",I5,"I5",H6,"H6",H4,"H4"],
["I5",H5,"H5",J5,"J5",I6,"I6",I4,"I4"],
["J5",I5,"I5",K5,"K5",J6,"J6",J4,"J4"],
["K5",J5,"J5",L5,"L5",K6,"K6",K4,"K4"],
["L5",K5,"K5",M5,"M5",L6,"L6",L4,"L4"],
["M5",L5,"L5",M5,"M5",M5,"M5",M4,"M4"],
// -------LIGNE 6 --------------- //
["A6",A6,"A6",A6,"A6",A7,"A7",A5,"A5"],
["C6",C6,"C6",D6,"D6",C7,"C7",C5,"C5"],
["D6",C6,"C6",E6,"E6",D7,"D7",D6,"D6"],
["E6",D6,"D6",F6,"F6",E7,"E7",E6,"E6"],
["F6",F6,"F6",G6,"G6",F7,"F7",F5,"F5"],
["G6",F6,"F6",H6,"H6",G6,"G6",G5,"G5"],
["H6",G6,"G6",I6,"I6",H6,"H6",H5,"H5"],
["I6",H6,"H6",J6,"J6",I6,"I6",I5,"I5"],
["J6",I6,"I6",K6,"K6",J6,"J6",J5,"J5"],
["K6",J6,"J6",L6,"L6",K7,"K7",K5,"K5"],
["L6",K6,"K6",L6,"L6",L7,"L7",L5,"L5"],
// -------LIGNE 7 --------------- //
["A7",A7,"A7",B7,"B7",A7,"A7",A6,"A6"],
["B7",A7,"A7",B7,"B7",B8,"B8",B7,"B7"],
["C7",C7,"C7",D7,"D7",C8,"C8",C6,"C6"],
["D7",C7,"C7",E7,"E7",D8,"D8",D6,"D6"],
["E7",D7,"D7",F7,"F7",E8,"E8",E6,"E6"],
["F7",E7,"E7",F7,"F7",F7,"F7",F6,"F6"],
["K7",K7,"K7",L7,"L7",K8,"K8",K6,"K6"],
["L7",K7,"K7",M7,"M7",L8,"L8",L6,"L6"],
["M7",L7,"L7",N7,"N7",M7,"M7",M7,"M7"],
["N7",M7,"M7",N7,"N7",N7,"N7",N7,"N7"],
// -------LIGNE 8 --------------- //
["B8",B8,"B8",C8,"C8",B8,"B8",B7,"B7"],
["C8",B8,"B8",D8,"D8",C8,"C8",C7,"C7"],
["D8",C8,"C8",E8,"E8",D8,"D8",D7,"D7"],
["E8",D8,"D8",E8,"E8",E8,"E8",E7,"E7"],
["K8",K8,"K8",L8,"L8",K8,"K8",K7,"K7"],
["L8",K8,"K8",L8,"L8",L8,"L8",L7,"L7"],

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
       else if(mapToLoad[i][j].couleur == boisMap.couleur){
        map[i][j] = new bois(i*taille,j*taille);
       }
       else if(mapToLoad[i][j].couleur == gameoverMap.couleur){
        map[i][j] = new gameover(i*taille,j*taille);
       }

      }


    }
    map[24]= mapToLoad[24][0];
    map[25]=mapToLoad[25];
    if(map[25] != null){
    for(i = 0;i < map[25].length ;i=i+3){
      if(map[25][i] == "poulpe"){
        ennemis.push(new poulpe(map[25][i+1],(map[25][i+2])));
      }
    }
  }
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
          ennemis = []
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
          ennemis = []
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
          ennemis = []
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
          ennemis = []
          loadMap(maps[i][7]);
          hup.y = 0;
          break;

          }

        }
      }
    }
  }


  // ----- FIN FONCTIONS SAUVEGARDE ----------//
