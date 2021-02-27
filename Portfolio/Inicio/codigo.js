
function cambiaColor2(numero){
    let colores=["red","blue","green","purple","black","yellow","gray","aqua"];
  var aux=document.getElementById("button");
  var random=Math.round(Math.random()*7);
  for (let index = 0; index < 100; index++) {
    aux.style.backgroundColor=colores[random];
  }
}
function mostrarLogo() {
    var logo=document.createElement("img");
    document.cre
    
document.getElementById("logo").innerHTML = logo;
}
// function mostrar() {
//     var x=document.getElementById("oculto");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }