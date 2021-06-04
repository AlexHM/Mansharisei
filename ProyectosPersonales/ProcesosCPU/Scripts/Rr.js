function crearProcesos() {


    let count = prompt("¿Cuantos procesos vamos a crear?");
    while (count > 3) {
        count = prompt("Demasiados procesos, máximo 3 procesos.")
    }


    let proceso = document.getElementById("procesosCreados");
    console.log(proceso);

    let count2 = 1;
    let count3=4;
    for (let i = 0; i < count; i++) {
        //Etiqueta del proceso
        let h5 = document.createElement("h5");
        proceso.appendChild(h5);
        let textoH5 = document.createTextNode(`proceso ${count2}`);
        h5.appendChild(textoH5);


        //Tiempo de llegada
        let h6_1 = document.createElement("h6");
        let textoH6_1 = document.createTextNode("Tiempo llegada:")
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", count2);


        proceso.appendChild(h6_1);
        h6_1.appendChild(textoH6_1);
        proceso.appendChild(input);

        //Tiempo de ejecucción
        let h6_2 = document.createElement("h6");
        let textoH6_2 = document.createTextNode("Tiempo Ejecución:")
        let input2 = document.createElement("input");
        input2.setAttribute("type", "number");
        input2.setAttribute("id", count3);

        proceso.appendChild(h6_2);
        h6_2.appendChild(textoH6_2);
        proceso.appendChild(input2);
        count2++;
        count3++;
    }




    let btnEnviar = document.createElement("button");
    btnEnviar.setAttribute("id", "btnEnviar");
    btnEnviar.setAttribute("onclick", "generarTabla();");
    textoBtnEnviar = document.createTextNode("Generar tabla");
    btnEnviar.appendChild(textoBtnEnviar);
    proceso.appendChild(btnEnviar);
}

function generarTabla() {
    let tabla=document.getElementById("tabla");
    console.log(tabla);

    //Cabecera tabla
    let cabecera=document.createElement("tr");
    tabla.appendChild(cabecera);

    // titulo Proceso
    let proceso1=document.createElement("th");
    proceso1.setAttribute("class","ths");
    let textoProceso=document.createTextNode("Proceso");

    proceso1.appendChild(textoProceso);
    cabecera.appendChild(proceso1);

    //Inicio
    let inicio=document.createElement("th");
    inicio.setAttribute("class","ths");
    let textoInicio=document.createTextNode("Inicio");

    inicio.appendChild(textoInicio);
    cabecera.appendChild(inicio);

    //Fin
    let fin=document.createElement("th");
    fin.setAttribute("class","ths");
    let textoFin=document.createTextNode("Fin");

    fin.appendChild(textoFin);
    cabecera.appendChild(fin);

    //Tiempo respuesta
    let tiempoRespuesta=document.createElement("th");
    tiempoRespuesta.setAttribute("class","ths");
    let textoTiempoRespuesta=document.createTextNode("Tiempo Respuesta");

    tiempoRespuesta.appendChild(textoTiempoRespuesta);
    cabecera.appendChild(tiempoRespuesta);

    //Tiempo Espera
    let tiempoEspera=document.createElement("th");
    tiempoEspera.setAttribute("class","ths");
    let textoTiempoEspera=document.createTextNode("Tiempo Espera");

    tiempoEspera.appendChild(textoTiempoEspera);
    cabecera.appendChild(tiempoEspera);
    
   //Penalizacion

    let penalizacion=document.createElement("th");
    penalizacion.setAttribute("class","ths");
    let textoPenalizacion=document.createTextNode("Penalización");

    penalizacion.appendChild(textoPenalizacion);
    cabecera.appendChild(penalizacion);
    

}