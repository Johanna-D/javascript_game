window.onload = init;
var canvas;
var map = new Array(20);
for (var i = 0; i < 20; i++)
{
 map[i] = new Array(20);
}

var couleurCourante="black";
var newElement;
class quadrillageMap{
  constructor(){
    this.x = 1;
    this.y = 1;
    this.taille = 16;
    this.ligne = canvas.height/this.taille;
    this.colonne = canvas.width/this.taille;
  }
  drawrect(multl,multc){
    ctx.strokeRect(this.x * multl,this.y * multc,this.taille,this.taille);
  }
  drawrectClic(x,y, couleur){
    ctx.save();
    ctx.fillStyle = couleur;
    ctx.fillRect(this.x * x,this.y * y,this.taille,this.taille);
    ctx.restore();
  }
}

function processMouseMouve(evt) {
  let rect = evt.target.getBoundingClientRect()
  let mouseX = evt.clientX - rect.left;
  let mouseY = evt.clientY - rect.top;

  mousePos = {
    x: mouseX,
    y: mouseY
  }
 }

 function collision(map, hup) {
    var testX=hup.x;
    var testY=hup.y;
    if (testX < map.x){ testX=map.x-5;}
    if (testX > map.x+map.taille){ testX=map.x+map.taille/4;}
    if (testY < map.y){ testY=map.y-5;}
    if (testY > map.y+map.taille){ testY=map.y+map.taille/4;}
    return (((hup.x-testX)*(hup.x-testX)+(hup.y-testY)*(hup.y-testY))< hup.taille*hup.taille);
 }

 function testeCollisionsSourisAutresRectangles(map,hup) {
       if(collision(map,hup)){
         map.couleurRoche = "green";
       }
       else{
         map.couleurRoche = "#655b5b";
       }
     }



function drawMap(grille){
  for(let i =0;i< grille.ligne ;i++){
    let multl = grille.taille * i;
    for(let j = 0;j<grille.colonne;j++){
      let multc = grille.taille * j;
      map[i][j]= grille.drawrect(multl,multc);
    }
  }
}

function changeCouleur(c) {
  couleurCourante = c;
  console.log(c);
}

function ajouteRoche(){
  newElement = "roche";
}

function anime() {

  // 1) On efface l'Ã©cran
  ctx.clearRect(grille.x,grille.y, canvas.width, canvas.height);
  //drawMap(grille);
  // 2) On dessine et on déplace le char 1
  drawPerso(hup);
  deplacementPerso(hup);
  for(a =0; a<20;a++){
    for(b = 0;b<20;b++){
      if(map[a][b] instanceof roche){
        drawRoche(map[a][b]);

        testeCollisionsSourisAutresRectangles(map[a][b],hup);
      }
    }
  }

  //if(inputStates.SPACE) {
    //char1.addBullet(Date.now());
  //}

  // On demande une nouvelle frame d'animation
  window.requestAnimationFrame(anime);

}

function init() {

  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  grille = new quadrillageMap;
  hup = new personnage;
   //drawPerso(hup);
   //hup.deplacementPerso();

  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/grille.taille);
    let y = Math.floor(mousePos.y/grille.taille);
    if(newElement == "roche"){
      map[x][y] = new roche(x*grille.taille,y*grille.taille);
      console.log("map x=" + x + " y = " + y + " c = " + map[x][y]);
      //grille.drawrectClic(x*grille.taille,y*grille.taille, )
      //draw(map[y][x]);
    }
  }
   anime();
   }

/* -----------------INFOS POUR PLUS TARD -------------------------------------
   const assestsToLoadURLs{ // pour charger les éléments AVANT que le jeu ne démarre
       backgroundImage: { url :'lien'},
       plop : { url:'son', buffer :false On veut que ce soit chargé en mémoire. true, c'est qu'on veut en streeming, loop : false, volume: 1.0 volume du son}
   }

   -------------------------------------------------------------------------*/
