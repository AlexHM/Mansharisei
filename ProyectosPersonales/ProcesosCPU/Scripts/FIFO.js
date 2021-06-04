function generarTabla() {
    let tabla = document.getElementById("tabla");
    console.log(tabla);

    //Cabecera tabla
    let cabecera = document.createElement("tr");
    tabla.appendChild(cabecera);

    // titulo Proceso
    let proceso = document.createElement("th");
    proceso.setAttribute("class", "ths");
    let textoProceso = document.createTextNode("Proceso");

    proceso.appendChild(textoProceso);
    cabecera.appendChild(proceso);

    //Inicio
    let inicio = document.createElement("th");
    inicio.setAttribute("class", "ths");
    let textoInicio = document.createTextNode("Inicio");

    inicio.appendChild(textoInicio);
    cabecera.appendChild(inicio);

    //Fin
    let fin = document.createElement("th");
    fin.setAttribute("class", "ths");
    let textoFin = document.createTextNode("Fin");

    fin.appendChild(textoFin);
    cabecera.appendChild(fin);

    //Tiempo respuesta
    let tiempoRespuesta = document.createElement("th");
    tiempoRespuesta.setAttribute("class", "ths");
    let textoTiempoRespuesta = document.createTextNode("Tiempo Respuesta");

    tiempoRespuesta.appendChild(textoTiempoRespuesta);
    cabecera.appendChild(tiempoRespuesta);

    //Tiempo Espera
    let tiempoEspera = document.createElement("th");
    tiempoEspera.setAttribute("class", "ths");
    let textoTiempoEspera = document.createTextNode("Tiempo Espera");

    tiempoEspera.appendChild(textoTiempoEspera);
    cabecera.appendChild(tiempoEspera);

    //Penalizacion

    let penalizacion = document.createElement("th");
    penalizacion.setAttribute("class", "ths");
    let textoPenalizacion = document.createTextNode("Penalización");

    penalizacion.appendChild(textoPenalizacion);
    cabecera.appendChild(penalizacion);

    ///////////////
    //PROCESO 1
    let tr1 = document.createElement("tr");
    tabla.appendChild(tr1);

    //Proceso1
    let proceso1 = document.createElement("td");
    let textoProceso1 = document.createTextNode("1");


    proceso1.appendChild(textoProceso1);
    tr1.appendChild(proceso1);

    //inicio-proceso1
    let inicio1 = document.createElement("td");
    tr1.appendChild(inicio1);

    //fin-proceso1
    let fin1 = document.createElement("td");
    tr1.appendChild(fin1);


    //TiempoRespuesta-proceso1
    let tiempoRespuesta1 = document.createElement("td");
    tr1.appendChild(tiempoRespuesta1);

    //TiempoEspera-proceso1
    let tiempoEspera1 = document.createElement("td");
    tr1.appendChild(tiempoEspera1);

    //Penalizacion-proceso1
    let penalizacion1 = document.createElement("td");
    tr1.appendChild(penalizacion1);

    ////////////
    //PROCESO 2

    let tr2 = document.createElement("tr");
    tabla.appendChild(tr2);

    //Proceso2
    let proceso2 = document.createElement("td");
    let textoProceso2 = document.createTextNode("2");


    proceso2.appendChild(textoProceso2);
    tr2.appendChild(proceso2);

    //inicio-proceso1
    let inicio2 = document.createElement("td");
    tr2.appendChild(inicio2);

    //fin-proceso1
    let fin2 = document.createElement("td");
    tr2.appendChild(fin2);


    //TiempoRespuesta-proceso1
    let tiempoRespuesta2 = document.createElement("td");
    tr2.appendChild(tiempoRespuesta2);

    //TiempoEspera-proceso1
    let tiempoEspera2 = document.createElement("td");
    tr2.appendChild(tiempoEspera2);

    //Penalizacion-proceso1
    let penalizacion2 = document.createElement("td");
    tr2.appendChild(penalizacion2);

    ////////////
    //PROCESO 3

    let tr3 = document.createElement("tr");
    tabla.appendChild(tr3);

    //Proceso3
    let proceso3 = document.createElement("td");
    let textoProceso3 = document.createTextNode("3");


    proceso3.appendChild(textoProceso3);
    tr3.appendChild(proceso3);

    //inicio-proceso1
    let inicio3 = document.createElement("td");
    tr3.appendChild(inicio3);

    //fin-proceso1
    let fin3 = document.createElement("td");
    tr3.appendChild(fin3);


    //TiempoRespuesta-proceso1
    let tiempoRespuesta3 = document.createElement("td");
    tr3.appendChild(tiempoRespuesta3);

    //TiempoEspera-proceso1
    let tiempoEspera3 = document.createElement("td");
    tr3.appendChild(tiempoEspera3);

    //Penalizacion-proceso1
    let penalizacion3 = document.createElement("td");
    tr3.appendChild(penalizacion3);


    //COMPARACIONES
    let auxProceso1 = Number.parseInt(document.getElementById("4").value);
    let auxProceso2 = Number.parseInt(document.getElementById("5").value)
    let auxProceso3 = Number.parseInt(document.getElementById("6").value);
    let auxProceso1L = Number.parseInt(document.getElementById("1").value);
    let auxProceso2L = Number.parseInt(document.getElementById("2").value);
    let auxProceso3L = Number.parseInt(document.getElementById("3").value);

    let TR1 = 0;
    let TR2 = 0;
    let TR3 = 0;


    if (auxProceso1L < auxProceso2L && auxProceso1L < auxProceso3L) {

        //Inicio
        inicio1.innerHTML = "0";

        //fin
        fin1.innerHTML = auxProceso1;

        //Tiempo respuesta
        tiempoRespuesta1.innerHTML = auxProceso1 - auxProceso1L;

        //Tiempo espera
        tiempoEspera1.innerHTML = (auxProceso1 - auxProceso1L) - auxProceso1;

        //penalizacion
        penalizacion1.innerHTML = (auxProceso1 - auxProceso1L) / auxProceso1;

        if (auxProceso2L < auxProceso3L) {
            //Proceso 2
            //Inicio
            inicio2.innerHTML = auxProceso1;

            //fin
            fin2.innerHTML = auxProceso1 + auxProceso2;

            //Tiempo respuesta
            tiempoRespuesta2.innerHTML = (auxProceso1 + auxProceso2) - auxProceso2L;

            //Tiempo espera
            tiempoEspera2.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso2L) - auxProceso2;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso2L) / auxProceso2;

            //Proceso 3
            //Inicio
            inicio3.innerHTML = auxProceso1 + auxProceso2;

            //fin
            fin3.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta3.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L;

            //Tiempo espera
            tiempoEspera3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) - auxProceso3;

            //penalizacion
            penalizacion3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) / auxProceso3;


        } else if (auxProceso3L < auxProceso1L) {

            //PRoceso3
            //Inicio
            inicio3.innerHTML = auxProceso1;

            //fin
            fin3.innerHTML = auxProceso1 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta3.innerHTML = (auxProceso1 + auxProceso3) - auxProceso3L;

            //Tiempo espera
            tiempoEspera3.innerHTML = ((auxProceso1 + auxProceso3) - auxProceso3L) - auxProceso3;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso1 + auxProceso3) - auxProceso3L) / auxProceso3;

            //Proceso 2
            //Inicio
            inicio2.innerHTML = auxProceso1 + auxProceso3;

            //fin
            fin2.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta2.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L;

            //Tiempo espera
            tiempoEspera2.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) - auxProceso3;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) / auxProceso3;
        }



    } else if (auxProceso2L < auxProceso1L && auxProceso2L < auxProceso3L) {

        //Inicio
        inicio2.innerHTML = "0";

        //fin
        fin2.innerHTML = auxProceso2;

        //Tiempo respuesta
        tiempoRespuesta2.innerHTML = auxProceso2 - auxProceso2L;

        //Tiempo espera
        tiempoEspera2.innerHTML = (auxProceso2 - auxProceso2L) - auxProceso2;

        //penalizacion
        penalizacion2.innerHTML = (auxProceso2 - auxProceso2L) / auxProceso2;

        if (auxProceso1L < auxProceso3L) {

            //Proceso 1
            //Inicio
            inicio1.innerHTML = auxProceso2;

            //fin
            fin1.innerHTML = auxProceso1 + auxProceso2;

            //Tiempo respuesta
            tiempoRespuesta1.innerHTML = (auxProceso1 + auxProceso2) - auxProceso1L;

            //Tiempo espera
            tiempoEspera1.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso1L) - auxProceso1;

            //penalizacion
            penalizacion1.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso1L) / auxProceso1;

            //Proceso 3
            //Inicio
            inicio3.innerHTML = auxProceso1 + auxProceso2;

            //fin
            fin3.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta3.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L;

            //Tiempo espera
            tiempoEspera3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) - auxProceso3;

            //penalizacion
            penalizacion3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) / auxProceso3;


        } else if (auxProceso3L < auxProceso1L) {

            //PRoceso3
            //Inicio
            inicio3.innerHTML = auxProceso3;

            //fin
            fin3.innerHTML = auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta3.innerHTML = (auxProceso2 + auxProceso3) - auxProceso3L;

            //Tiempo espera
            tiempoEspera3.innerHTML = ((auxProceso2 + auxProceso3) - auxProceso3L) - auxProceso3;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso2 + auxProceso3) - auxProceso3L) / auxProceso3;

            //Proceso 1
            //Inicio
            inicio1.innerHTML = auxProceso2 + auxProceso3;

            //fin
            fin1.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta1.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L;

            //Tiempo espera
            tiempoEspera1.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L) - auxProceso1;

            //penalizacion
            penalizacion1.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L) / auxProceso1;
        }





    } else if (auxProceso3L < auxProceso1L && auxProceso3L < auxProceso2L) {

        //Inicio
        inicio3.innerHTML = "0";

        //fin
        fin3.innerHTML = auxProceso3;

        //Tiempo respuesta
        tiempoRespuesta3.innerHTML = auxProceso3 - auxProceso3L;

        //Tiempo espera
        tiempoEspera3.innerHTML = (auxProceso3 - auxProceso3L) - auxProceso3;

        //penalizacion
        penalizacion3.innerHTML = (auxProceso3 - auxProceso3L) / auxProceso3;



        if (auxProceso1L < auxProceso2L) {

            //Proceso 1
            //Inicio
            inicio1.innerHTML = auxProceso3;

            //fin
            fin1.innerHTML = auxProceso1 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta1.innerHTML = (auxProceso1 + auxProceso3) - auxProceso1L;

            //Tiempo espera
            tiempoEspera1.innerHTML = ((auxProceso1 + auxProceso3) - auxProceso1L) - auxProceso1;

            //penalizacion
            penalizacion1.innerHTML = ((auxProceso1 + auxProceso3) - auxProceso1L) / auxProceso1;

            //Proceso 2
            //Inicio
            inicio2.innerHTML = auxProceso1 + auxProceso3;

            //fin
            fin2.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta2.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso2L;

            //Tiempo espera
            tiempoEspera2.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso2L) - auxProceso2;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso2L) / auxProceso2;


        } else if (auxProceso2L < auxProceso1L) {





            //PRoceso2
            //Inicio
            inicio2.innerHTML = auxProceso3;

            //fin
            fin2.innerHTML = auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta2.innerHTML = (auxProceso2 + auxProceso3) - auxProceso2L;

            //Tiempo espera
            tiempoEspera2.innerHTML = ((auxProceso2 + auxProceso3) - auxProceso2L) - auxProceso2;

            //penalizacion
            penalizacion2.innerHTML = ((auxProceso2 + auxProceso3) - auxProceso2L) / auxProceso2;

            //Proceso 1
            //Inicio
            inicio1.innerHTML = auxProceso2 + auxProceso3;

            //fin
            fin1.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

            //Tiempo respuesta
            tiempoRespuesta1.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L;

            //Tiempo espera
            tiempoEspera1.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L) - auxProceso1;

            //penalizacion
            penalizacion1.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso1L) / auxProceso1;
        }





    } else if (auxProceso1L == auxProceso2L && auxProceso1L < auxProceso3L) {
        //Inicio
        inicio1.innerHTML = "0";

        //fin
        fin1.innerHTML = auxProceso1;

        //Tiempo respuesta
        tiempoRespuesta1.innerHTML = auxProceso1 - auxProceso1L;

        //Tiempo espera
        tiempoEspera1.innerHTML = (auxProceso1 - auxProceso1L) - auxProceso1;

        //penalizacion
        penalizacion1.innerHTML = (auxProceso1 - auxProceso1L) / auxProceso1;

        //Proceso 2
        //Inicio
        inicio2.innerHTML = auxProceso1;

        //fin
        fin2.innerHTML = auxProceso1 + auxProceso2;

        //Tiempo respuesta
        tiempoRespuesta2.innerHTML = (auxProceso1 + auxProceso2) - auxProceso2L;

        //Tiempo espera
        tiempoEspera2.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso2L) - auxProceso2;

        //penalizacion
        penalizacion2.innerHTML = ((auxProceso1 + auxProceso2) - auxProceso2L) / auxProceso2;

        //Proceso 3
        //Inicio
        inicio3.innerHTML = auxProceso1 + auxProceso2;

        //fin
        fin3.innerHTML = auxProceso1 + auxProceso2 + auxProceso3;

        //Tiempo respuesta
        tiempoRespuesta3.innerHTML = (auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L;

        //Tiempo espera
        tiempoEspera3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) - auxProceso3;

        //penalizacion
        penalizacion3.innerHTML = ((auxProceso1 + auxProceso2 + auxProceso3) - auxProceso3L) / auxProceso3;



    }




    //boton para generar Grafica
    let Grafica = document.getElementById("grafica");
    btnGrafica = document.createElement("button");
    btnGrafica.setAttribute("id", "btnGrafica");
    btnGrafica.setAttribute("id", "btnGrafica");
    btnGrafica.setAttribute("onclick", "generarGrafica();");
    textoBtnGrafica = document.createTextNode("Generar gráfica");
    btnGrafica.appendChild(textoBtnGrafica);
    Grafica.appendChild(btnGrafica);
}


function crearProcesos() {


    let proceso = document.getElementById("procesosCreados");
    console.log(proceso);

    let count2 = 1;
    let count3 = 4;

    for (let i = 0; i < 3; i++) {
        //Etiqueta del proceso
        let h5 = document.createElement("h5");
        proceso.appendChild(h5);
        let textoH5 = document.createTextNode(`proceso ${count2}`);
        h5.setAttribute("class", "procesosColor");
        h5.appendChild(textoH5);


        //Tiempo de llegada
        let h6_1 = document.createElement("h6");
        h6_1.setAttribute("class", "TE-TL")
        let textoH6_1 = document.createTextNode("Tiempo llegada:")
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", count2);


        proceso.appendChild(h6_1);
        h6_1.appendChild(textoH6_1);
        proceso.appendChild(input);

        //Tiempo de ejecucción
        let h6_2 = document.createElement("h6");
        h6_2.setAttribute("class", "TE-TL")
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
    //boton para generar Table
    let btnEnviar = document.createElement("button");
    btnEnviar.setAttribute("id", "btnEnviar");
    btnEnviar.setAttribute("onclick", "generarTabla();");
    textoBtnEnviar = document.createTextNode("Generar tabla");
    btnEnviar.setAttribute("id", "btnEnviar");
    btnEnviar.appendChild(textoBtnEnviar);
    proceso.appendChild(btnEnviar);


}

var aux = 35;

function generarGrafica() {
    let grafica = document.getElementById("pintaGrafica").style.display = "block";
    let auxProceso1L = Number.parseInt(document.getElementById("1").value);
    let auxProceso2L = Number.parseInt(document.getElementById("2").value);
    let auxProceso3L = Number.parseInt(document.getElementById("3").value);
    let auxProceso1 = Number.parseInt(document.getElementById("4").value);
    let auxProceso2 = Number.parseInt(document.getElementById("5").value)
    let auxProceso3 = Number.parseInt(document.getElementById("6").value);
    let prueba1 = document.getElementById("prueba1");
    let prueba2 = document.getElementById("prueba2");
    let prueba3 = document.getElementById("prueba3");




    if (auxProceso1 < auxProceso2 && auxProceso1 < auxProceso3) {

        for (let a = 0; a < auxProceso1; a++) {
            let casilla = document.createElement("div");
            casilla.setAttribute("class", "casilla");
            prueba1.appendChild(casilla);
        }

        if (auxProceso2 < auxProceso3) {

            //CASILLAS VACIAS A PROCESO 2

            for (let i = 0; i < auxProceso1; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba2.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);
            }

            //CASILLAS VACIAS A PROCESO 3
            for (let a = 0; a < (auxProceso1 + auxProceso2); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");

                prueba3.appendChild(casillaVacia);
            }

            //CASILLAS NORNAMES A PROCESO 2
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);

            }

        } else if (auxProceso3 < auxProceso2) {
            //CASILLAS VACIAS A PROCESO 3

            for (let i = 0; i < auxProceso1; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba3.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);
            }

            //CASILLAS VACIAS A PROCESO 2
            for (let a = 0; a < (auxProceso1 + auxProceso3); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba2.appendChild(casillaVacia);
            }

            //CASILLAS NORMALES A PROCESO 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);

            }
        }



    } else if (auxProceso2 < auxProceso1 && auxProceso2 < auxProceso3) {

        for (let a = 0; a < auxProceso2; a++) {
            let casilla2 = document.createElement("div");
            casilla2.setAttribute("class", "casilla");
            prueba2.appendChild(casilla2);
        }

        if (auxProceso1 < auxProceso3) {

            //CASILLAS VACIAS A PROCESO 1

            for (let i = 0; i < auxProceso2; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba1.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla1 = document.createElement("div");
                casilla1.setAttribute("class", "casilla");
                prueba1.appendChild(casilla1);
            }

            //CASILLAS VACIAS A PROCESO 3
            for (let a = 0; a < (auxProceso1 + auxProceso2); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");

                prueba3.appendChild(casillaVacia);
            }

            //CASILLAS NORNAMES A PROCESO 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);

            }

        } else if (auxProceso3 < auxProceso1) {
            //CASILLAS VACIAS A PROCESO 3

            for (let i = 0; i < auxProceso2; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba3.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);
            }

            //CASILLAS VACIAS A PROCESO 1
            for (let a = 0; a < (auxProceso2 + auxProceso3); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba1.appendChild(casillaVacia);
            }

            //CASILLAS NORMALES A PROCESO 3
            for (let a = 0; a < auxProceso1; a++) {
                let casilla1 = document.createElement("div");
                casilla1.setAttribute("class", "casilla");
                prueba1.appendChild(casilla1);

            }
        }





    } else if (auxProceso3 < auxProceso1 && auxProceso3 < auxProceso2) {

        for (let a = 0; a < auxProceso3; a++) {
            let casilla3 = document.createElement("div");
            casilla3.setAttribute("class", "casilla");
            prueba3.appendChild(casilla3);
        }

        if (auxProceso1 < auxProceso2) {

            //CASILLAS VACIAS A PROCESO 1

            for (let i = 0; i < auxProceso3; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba1.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla1 = document.createElement("div");
                casilla1.setAttribute("class", "casilla");
                prueba1.appendChild(casilla1);
            }

            //CASILLAS VACIAS A PROCESO 2
            for (let a = 0; a < (auxProceso1 + auxProceso3); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");

                prueba2.appendChild(casillaVacia);
            }

            //CASILLAS NORNAMES A PROCESO 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);

            }

        } else if (auxProceso2 < auxProceso1) {
            //CASILLAS VACIAS A PROCESO 2

            for (let i = 0; i < auxProceso2; i++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba2.appendChild(casillaVacia);

            }
            //CASILLAS NORMALES A PROCESO 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);
            }

            //CASILLAS VACIAS A PROCESO 1
            for (let a = 0; a < (auxProceso2 + auxProceso3); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba1.appendChild(casillaVacia);
            }

            //CASILLAS NORMALES A PROCESO 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla1 = document.createElement("div");
                casilla1.setAttribute("class", "casilla");
                prueba1.appendChild(casilla1);

            }
        }





    } else if (auxProceso1 == auxProceso2 && auxProceso1 < auxProceso3) {

        if (auxProceso1L < auxProceso2L) {
            //Casillas normales a proceso 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla = document.createElement("div");
                casilla.setAttribute("class", "casilla");
                prueba1.appendChild(casilla);
            }

            //Casillas vacias a proceso 2
            for (let a = 0; a < auxProceso1; a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba2.appendChild(casillaVacia);
            }

            //Casillas normales a proceos 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);
            }

            //Casillas vacias a proceso 3
            for (let a = 0; a < (auxProceso1 + auxProceso2); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba3.appendChild(casillaVacia);
            }

            //Casillas normales a proceso 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);

            }

        } else if (auxProceso2L < auxProceso1L) {

            //Casillas normales a proceso 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);
            }

            //Casillas vacias a proceso 1
            for (let a = 0; a < auxProceso2; a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba1.appendChild(casillaVacia);
            }

            //Casillas normales a proceso 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla1 = document.createElement("div");
                casilla1.setAttribute("class", "casilla");
                prueba1.appendChild(casilla1);
            }

            //Casillas vacias a proceso 3
            for (let a = 0; a < auxProceso2 + auxProceso1; a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba3.appendChild(casillaVacia);
            }

            //Casillas normales a proceso 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);
            }








        } else if (auxProceso1L == auxProceso2L) {
            //Casillas normales a proceso 1
            for (let a = 0; a < auxProceso1; a++) {
                let casilla = document.createElement("div");
                casilla.setAttribute("class", "casilla");
                prueba1.appendChild(casilla);
            }

            //Casillas vacias a proceso 2
            for (let a = 0; a < auxProceso1; a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba2.appendChild(casillaVacia);
            }

            //Casillas normales a proceos 2
            for (let a = 0; a < auxProceso2; a++) {
                let casilla2 = document.createElement("div");
                casilla2.setAttribute("class", "casilla");
                prueba2.appendChild(casilla2);
            }

            //Casillas vacias a proceso 3
            for (let a = 0; a < (auxProceso1 + auxProceso2); a++) {
                let casillaVacia = document.createElement("div");
                casillaVacia.setAttribute("class", "casilla2");
                prueba3.appendChild(casillaVacia);
            }

            //Casillas normales a proceso 3
            for (let a = 0; a < auxProceso3; a++) {
                let casilla3 = document.createElement("div");
                casilla3.setAttribute("class", "casilla");
                prueba3.appendChild(casilla3);
            }

        }

    }
}
