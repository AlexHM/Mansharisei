
function mostrarLogo() {
  var aux = document.getElementById("logo");
  var img = document.createElement("img");
  aux.appendChild(img);
  img.setAttribute("id", "logos2");
  var imgs = document.getElementById("logos2").animate([

    { transform: 'scale(0.5)' },
    { transform: 'scale(0.8)' }
  ], {

    duration: 1000,
    iterations: 3
  });
  img.setAttribute("src", "logo.png")
  img.style.width = "300px";
  img.style.height = "200px";
  console.log(aux);

}
