var numeroTexte = 0;
var entrées = [];
var cpt = 0;
for (var i = 0; i < 24; i++)
{
  map[i] = new Array(18);
  for(var j = 0; j < 18; j++)
 {
   map[i][j] = new sol(i*taille,j*taille);
  }
}
var objets = [];
function processMouseMouve(evt) {
  let rect = evt.target.getBoundingClientRect()
  let mouseX = evt.clientX - rect.left;
  let mouseY = evt.clientY - rect.top;
  mousePos = {
    x: mouseX,
    y: mouseY
  }
 }

 function ajoute(element){
     newElement = element;
   }

function tirBalle(ennemi){
  if(ennemi.tir < ennemi.tirmax){
    if((Math.random()*100)<=6){
     ennemi.tir = ennemi.tir + 1;
      ennemi.balles.push(new ballePoulpe(ennemi.x,ennemi.y,ennemi.angle));
    }
  }
}
function ecrire(){
  ctx.font = '16px serif';
  if(numeroTexte == 0){
  ctx.fillText("OH, SOMEONE HERE! I DIDN'T BELIEVE IT WOULD EVER HAPPEN...", (4*32)+2, (6*32)-11);
  ctx.fillText("PLEASE? WE NEED YOUR HELP...",(8*32)+5, (7*32)-11);
  setTimeout("numeroTexte = 1",4800);
  }
  if(numeroTexte == 1){
  ctx.fillText("TRAVEL THE WORLD TO FIND THE THREE KEYS,", (6*32)+10, (6*32)-11);
  ctx.fillText("WHICH ALLOW YOU TO ENTER INTO THE MONSTER KING'S DUNGEON", (3*32)+21, (7*32)-11);
  ctx.fillText("DEFEAT HIM AND DESTROY THE CRYSTAL TO SAVE THE WORLD", (4*32)+12, (8*32)-11);
  if(cpt == 0){
    setTimeout("numeroTexte = 2",7500);
    cpt = 1;
  }
  }
  if(numeroTexte == 2){
  ctx.fillText("IT'S DANGEROUS TO GO ALONE!", (8*32)+6, (6*32)-11);
  ctx.fillText("TAKE THIS.",(11*32)-10, (7*32)-11);
  setTimeout("numeroTexte = 3",3000);
  }
  if(numeroTexte == 3){
  ctx.fillText("GOOD LUCK!", (10*32)+14, (7*32)-11);
  }
}
function anime() {
  ctx.clearRect(1,1, canvas.width, canvas.height);
  moveg = true;
  moved = true;
  moveh = true;
  moveb = true;
  for(a =0; a<24;a++){
    for(b = 0;b<18;b++){
      if(map[a][b] instanceof sol){
        map[a][b].draw();
      }
      if(map[a][b] instanceof bois){
        map[a][b].draw();
      }
      if(map[a][b] instanceof roche){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof arbre){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof eau){
        map[a][b].draw();
      }
      if(map[a][b] instanceof herbe){
        map[a][b].draw();
      }
      if(map[a][b] instanceof fleur){
        map[a][b].draw();
      }
      if(map[a][b] instanceof neige){
        map[a][b].draw();
      }
      if(map[a][b] instanceof eauProfonde){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof solRoche){
        map[a][b].draw();
      }
      if(map[a][b] instanceof solDonjon){
        map[a][b].draw();
      }
      if(map[a][b] instanceof murHaut){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof murBas){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof murGauche){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof murDroit){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof vide){
        map[a][b].draw();
        hup.collisionDecorHup(map[a][b]);
      }
      if(map[a][b] instanceof gameover){
        map[a][b].draw();
      }
    }
  }
  if(map[24]=="B8"){
    entrées.forEach( entrée =>{
      entrée.drawObjet();
      entrée.collisionEntréeHup(hup);
    })
  }
  /**/
  if(map[24]=="A2key"){
    clef1.drawObjet();
  clef1.collisionObjetHup(hup);
  }
  if(map[24]=="N7"){
    clef2.drawObjet();
  clef2.collisionObjetHup(hup);
  }
  if(map[24]=="M1"){
    clef3.drawObjet();
  clef3.collisionObjetHup(hup);
  }
  if(map[24]=="V11"){
    stairs1.drawObjet();
    if (hup.x == stairs1.x && hup.y == stairs1.y){
      hup.x = stairs1.x-32;
      hup.angle = 0;
      loadMap(Q13)

    }
  }
  if(map[24]=="Q13"){
    stairs2.drawObjet();
    if (hup.x == stairs2.x && hup.y == stairs2.y){
      hup.x = stairs2.x-32;
      hup.angle = 0;
      loadMap(V11);

    }
  }
  if(map[24]=="P12"){
    stairs3.drawObjet();
    if (hup.x == stairs3.x && hup.y == stairs3.y){
      hup.x = stairs3.x-32;
      hup.angle = 180;
      loadMap(U14);

    }
  }
  if(map[24]=="U14"){
    stairs4.drawObjet();
    if (hup.x == stairs4.x && hup.y == stairs4.y){
      hup.x = stairs4.x+32;
      hup.angle = 180;
      loadMap(P12);

    }
  }
  if(map[24]=="C1sword"){
    ennemis.push(new PNJ(map[25][i+1],(map[25][i+2])));
    hup.collisionDecorHup(map[11][8]);
    if(numeroTexte == 3 && hup.Epee == 0){
    var sword = new Image();
    sword.src = 'js/objetsRamassables/sword.png';
    ctx.drawImage(sword, (12*32)+8, (8*32)+4);
    }
    ecrire();
    ennemis[0].draw();
    if(hup.x == 12*32 && hup.y == 8*32 && numeroTexte == 3 && hup.Epee == 0){
      hup.Epee = 1;
    }
  }
  if(map[24]=="I1Bracelet"){
    if(hup.braceletForce == 1){
      let bracelet = new Image();
      bracelet.src='js/objetsRamassables/bracelet.png';
      ctx.drawImage(bracelet, 12*32,9*32);
    }
    if(hup.x == 12*32 && hup.y == 9*32 && hup.braceletForce == 1){
      hup.braceletForce = 2;
    }
  }
  hup.Interface();
    for(i = 0;i< ennemis.length;i++){
    if(ennemis[i] instanceof pouf){
      ennemis[i].deplacementPouf(hup);
    }
    ennemis[i].draw();
    if(ennemis[i] instanceof poulpeR || ennemis[i] instanceof poulpeB){
      ennemis[i].deplacement();
      tirBalle(ennemis[i]);
      if(ennemis[i].balles != null){
        for(j = 0;j< ennemis[i].balles.length;j++){
        ennemis[i].balles[j].drawTir();
        ennemis[i].balles[j].moveTir(ennemis[i],hup,ennemis[i].balles);
        }
      }
    }
    ennemis[i].mortEnnemi(ennemis,objets);
  }
  for(i = 0; i< objets.length;i++){
    objets[i].draw();
    objets[i].ramasseCoeur(objets,hup);
  }
  if(hup.angle != 360){
    hup.drawHup();
  }
  if(hup.Epee ==1){
    hup.drawHupEpee(hup.EpeeChiffre);
  }
  if(hup.angle == 360){
    hup.drawHup();
  }
  deplacementHup(hup,ennemis);
  hup.collisionEnnemisHup(ennemis);
  hup.gameover();
  changeMap();
  if(moveg == true){
      hup.vg =32;
  }
  else{
      hup.vg =0;
  }
  if(moved == true){
      hup.vd =32;
  }
  else{
      hup.vd =0;
  }
  if(moveb == true){
      hup.vb =32;
  }
  else{
      hup.vb =0;
  }
  if(moveh == true){
      hup.vh =32;
  }
  else{
      hup.vh =0;
  }
  window.requestAnimationFrame(anime);

}

function init() {
  loadMap(C1);
  hup = new hup(14*32,14*32);
  hup.image.src = "js/hupFace.png";
  ennemis.push(new pouf(8*32,8*32));
  clef1 = new clef(12*32,9*32);
  clef2 = new clef(14*32,8*32);
  clef3 = new clef(12*32,13*32);
  entrées.push(new porte(10*32,0));
  entrées.push(new porte(11*32,0));
  entrées.push(new porte(12*32,0));
  entrées.push(new porte(13*32,0));
  stairs1 = new stairs(19*32,9*32);
  stairs2 = new stairs(19*32,9*32);
  stairs3 = new stairs(4*32,9*32);
  stairs4 = new stairs(11*32,9*32);
  canvas.onmousedown = (event) => {
    processMouseMouve(event);
    let x = Math.floor(mousePos.x/taille);
    let y = Math.floor(mousePos.y/taille);
    if(newElement == "roche"){
      map[x][y] = new roche(x*taille,y*taille);
    }
    if(newElement == "arbre"){
      map[x][y] = new arbre(x*taille,y*taille);
    }
    if(newElement == "eau"){
      map[x][y] = new eau(x*taille,y*taille);
    }
    if(newElement == "herbe"){
      map[x][y] = new herbe(x*taille,y*taille);
    }
    if(newElement == "sol"){
      map[x][y] = new sol(x*taille,y*taille);
    }
    if(newElement == "solRoche"){
      map[x][y] = new solRoche(x*taille,y*taille);
    }
    if(newElement == "eauProfonde"){
      map[x][y] = new eauProfonde(x*taille,y*taille);
    }
    if(newElement == "neige"){
      map[x][y] = new neige(x*taille,y*taille);
    }
    if(newElement == "fleur"){
      map[x][y] = new fleur(x*taille,y*taille);
    }
    if(newElement == "bois"){
      map[x][y] = new bois(x*taille,y*taille);
    }
    if(newElement == "solDonjon"){
      map[x][y] = new solDonjon(x*taille,y*taille);
    }
    if(newElement == "murHaut"){
      map[x][y] = new murHaut(x*taille,y*taille);
    }
    if(newElement == "murBas"){
      map[x][y] = new murBas(x*taille,y*taille);
    }
    if(newElement == "murGauche"){
      map[x][y] = new murGauche(x*taille,y*taille);
    }
    if(newElement == "murDroit"){
      map[x][y] = new murDroit(x*taille,y*taille);
    }
    if(newElement == "vide"){
      map[x][y] = new vide(x*taille,y*taille);
    }
    if(newElement == "gameover"){
      map[x][y] = new gameover(x*taille,y*taille);
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
