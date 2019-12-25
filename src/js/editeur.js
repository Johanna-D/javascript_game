window.onload = init;


for (var i = 0; i < 24; i++)
{
  map[i] = new Array(18);
  for(var j = 0; j < 18; j++)
 {
   map[i][j] = new sol(i*taille,j*taille);
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
function ajoute(element){
    newElement = element;
  }

  function anime() {
    ctx.clearRect(1,1, canvas.width, canvas.height);
    
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
        }
        if(map[a][b] instanceof arbre){
          map[a][b].draw();
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
        }
        if(map[a][b] instanceof solRoche){
          map[a][b].draw();
        }
        
      }
    }
    window.requestAnimationFrame(anime);
  
  }









  function init() {

    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
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
      if(newElement == "gameover"){
        map[x][y] = new gameover(x*taille,y*taille);
      }
    }
     anime();
  
     }