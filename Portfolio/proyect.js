function generate1() {
  var aux2 = document.getElementById("papeles");
  var img = document.createElement("img");
  aux2.appendChild(img);
  img.setAttribute("src", "papelesAutonomos.png");
  img.style.width = "500px";
  img.style.height = "300px";
  img.style.marginBottom = "2%";
  img.style.marginTop = "2%";
  img.style.borderRadius = "4%";
  var h = document.createElement("h6");
  aux2.appendChild(h);
  var text = document.createTextNode("Home page sample, to see more information press the button below.");
  h.appendChild(text);
  h.style.marginBottom = "5%";
  var boton = document.createElement("a");
  boton.setAttribute("class", "btn btn-info");
  boton.setAttribute("id", "page");
  boton.setAttribute("href", "https://tuspapelesautonomos.es/");
  aux2.appendChild(boton);
  var texs = document.createTextNode("Web");
  boton.appendChild(texs);

}
function generate2() {
  var auxiliar = document.getElementById("papeles2");
  var img2 = document.createElement("img");
  auxiliar.appendChild(img2);
  img2.setAttribute("src", "Login.png");
  img2.style.width = "500px";
  img2.style.height = "300px";
  img2.style.borderRadius = "4%";
  img2.style.marginTop = "2%";
  img2.style.marginBottom = "2%";
  var hs = document.createElement("h6");
  auxiliar.appendChild(hs);
  var text2 = document.createTextNode("I am currently working in this project. Here I leave a little sample of login's window to a tutor/director");
  hs.appendChild(text2);


}
function tusapeles() {

}
