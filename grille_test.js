window.onload = init;
var canvas;
var map = new Array(40);
for (var i = 0; i < 40; i++)
{
 map[i] = new Array(40);
}

var couleurCourante="black";

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


function drawMap(p1){
  for(let i =0;i< p1.ligne ;i++){
    let multl = p1.taille * i;
    for(let j = 0;j<p1.colonne;j++){
      let multc = p1.taille * j;
      map[i][j]= p1.drawrect(multl,multc);
    }
  }
}

function changeCouleur(c) {
  couleurCourante = c;
  console.log(c);
}


function init() {
  
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  var p1 = new quadrillageMap;
   drawMap(p1);
  
  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/p1.taille); 
    let y = Math.floor(mousePos.y/p1.taille); 
    map[y][x] = couleurCourante;
    console.log("map x=" + x + " y = " + y + " c = " + couleurCourante);
    p1.drawrectClic(x*p1.taille,y*p1.taille, couleurCourante)
  }
    
   }

/* -----------------INFOS POUR PLUS TARD -------------------------------------
   const assestsToLoadURLs{ // pour charger les éléments AVANT que le jeu ne démarre
       backgroundImage: { url :'lien'},
       plop : { url:'son', buffer :false On veut que ce soit chargé en mémoire. true, c'est qu'on veut en streeming, loop : false, volume: 1.0 volume du son}
   }

   -------------------------------------------------------------------------*/