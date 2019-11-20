var map1 = saveMap();
function saveMap(){
    var map1 = "map1";
    var nomMap = document.getElementById("nomMap").value; 
    if( map1 == nomMap){
        map1= map;
    }
    console.log(map1);
    return map1;
}