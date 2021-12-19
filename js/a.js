let fechaInicio;
let fechaFin;

let a = /^Caja 1: \+1$/;
let b = /^Caja 2: \+1$/;
let c = /^Caja 3: \-2$/;

function agregarCliente(){
    contador += 1;
    document.getElementById("contadorCaja1").innerHTML = contador;
    document.getElementById("caja1").style.backgroundColor = "lightgreen";

    if (contador==1) {
        fechaInicio =new Date();
    }

    if(contador==4){
        document.getElementById("caja1").style.backgroundColor = "red";
        document.getElementById("Bcaja1").disabled = true;

        fechaFin = new Date();
        let aux = (fechaFin.getTime() - fechaInicio.getTime()) / 1000;
        alert("Hay mucha gente, han transcurrido: " + aux +"s");
    }
    
}
function agregarCliente1(){
    contador1 += 1;
    document.getElementById("contadorCaja2").innerHTML = contador1
    document.getElementById("caja2").style.backgroundColor = "lightgreen";
    if (contador1==1) {
        fechaInicio =new Date();
    }

    if(contador1==4){
        document.getElementById("caja2").style.backgroundColor = "red";
        document.getElementById("Bcaja2").disabled = true;

        fechaFin = new Date();
        let aux = (fechaFin.getTime() - fechaInicio.getTime()) / 1000;
        alert("Hay mucha gente, han transcurrido: " + aux +"s");
    }
}
function agregarCliente2(){
    contador2 += 1;
    document.getElementById("contadorCaja3").innerHTML = contador2
    document.getElementById("caja3").style.backgroundColor = "lightgreen";
    if (contador2==1) {
        fechaInicio =new Date();
    }

    if(contador2==4){
        document.getElementById("contadorCaja3").style.backgroundColor = "red";
        document.getElementById("Bcaja3").disabled = true;

        fechaFin = new Date();
        let aux = (fechaFin.getTime() - fechaInicio.getTime()) / 1000;
        alert("Hay mucha gente, han transcurrido: " + aux +"s");
    }
}
function agregarCliente3(){
    contador3 += 1;
    document.getElementById("contadorCaja4").innerHTML = contador3
    document.getElementById("caja4").style.backgroundColor = "lightgreen";
    if (contador3==1) {
        fechaInicio =new Date();
    }

    if(contador3==4){
        document.getElementById("caja4").style.backgroundColor = "red";
        document.getElementById("Bcaja4").disabled = true;

        fechaFin = new Date();
        let aux = (fechaFin.getTime() - fechaInicio.getTime()) / 1000;
        alert("Hay mucha gente, han transcurrido: " + aux +"s");
    }
}

function comprobarcomando(){
    
    let prueba = document.getElementById("texto").value;

    if(a.test(prueba)){
        agregarCliente();
        document.getElementById("texto").value="";
    }

    if(b.test(prueba)){
        agregarCliente1();
        document.getElementById("texto").value="";
    }

    if(c.test(prueba)){
        contador2 -=2;
        document.getElementById("contadorCaja3").innerHTML = contador;
        document.getElementById("caja3").style.backgroundColor = "red";
        document.getElementById("texto").value="";
    }
    

}

function ponerFondo(){
    document.getElementById("fondo").style.opacity=1;
}
function quitarFondo(){
    document.getElementById("fondo").style.opacity=0;
}