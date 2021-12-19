    class caja{
        constructor(numCaja){
            this.numeroCaja = numCaja; //identificador de la caja, nombre, numero.
            this.estado = false; // Esta abierta(true), o esta cerrada(false). De primeras esta cerrada, nosotros debemos abrirla clicando en ella.
            this.contadorCola = 0; // por defecto esta cerrada por lo tanto hay 0 personas esperando. //1 -{">"} 1 persona esperando. 2-> personas esperando... //4-> 4 personas esperando mostrar alerta de que hay mucha gente esperando.
            this.apta = false; // Con este atributo pretendo controlar si la caja es apta o no para introducir un nuevo usuario. Empieza cerrada por lo tanto false.
            // cuando la abrimos pasará a true. y cuando tiene 4 clientes pasará de nuevo a false. solo vamos a controlar el flujo de clientes por ella.
            this.horaApertura = null; //Aqui guardaremos la hora a la que se abrió la caja.
            this.horaCierre = null; // Aqui guardaremos la hora a la que se cerro la caja.
            this.tiempoEspera = null; // Tiempo de espera total que tiene la caja.
            this.totalFacturado = null;  // Total facturado por todos los clientes que pasan.
            this.listaClientes = []; // Array de los clientes que entran en la cola de espera.
        }

    //METODOS
        cambiarEstado(){ //Este metodo nos va a cambiar el estado
            if(!this.estado){ // Si esta en false(cerrada)
                this.estado = true; //la abre
                document.getElementById("caja"+this.numeroCaja).style.backgroundColor="#B8CC7A"; //cambiamos el color identificativo a verde
                document.getElementById("contadorCaja"+this.numeroCaja).innerHTML = 0; // Al activar la caja mostramos el numero inicial de gente esperando
                // que sera 0.
                this.horaApertura = new Date(); //Al abrir la caja, marcamos la hora de apertuda de la caja.
                this.apta = true;

                let tag = document.createElement("p"); //Creamos etiqueta p
                let text = document.createTextNode(`Se ha abierto la caja: ${this.numeroCaja}`); // Texto que pondremos dentro del <p>
                tag.appendChild(text); //añadimos el texto a la etiqueta p creada
                let element = document.getElementById("pantallaConsola"); // almacenamos el elemento donde queremos guardar el p con su respectivo texto
                element.appendChild(tag); // añadimos texto al elemento.
            }
        
            else // Si por el contrario esta en true (abierta)
                this.estado = false; //la cerramos
        }
        aumentarContador(){ // Este metodo lo que va a hacer es aumentar el numero de personas que esperan
            
            this.contadorCola += 1; // aumento en 1 el numero de personas esperando
            let contadorAux = document.getElementById("contadorCaja"+this.numeroCaja).innerHTML; // Aqui me ha dado error. Por lo tanto guardo en una variable
            
            // El elemento contadorCaja para poder mostrar el numero de personas que estan esperando
            contadorAux = parseInt(contadorAux)+1;
            document.getElementById("contadorCaja"+this.numeroCaja).innerHTML = contadorAux;
            
            let tiempoFinal = new Date();
            this.tiempoEspera = Math.round((Math.abs(tiempoFinal - this.horaApertura))/1000);
            if(this.contadorCola == 4){
                this.apta = false;
            }
            if(this.contadorCola%4 == 0){
                let tag = document.createElement("span"); //Creamos etiqueta p
                let text = document.createTextNode(`Tenemos muchos clientes en la caja: ${this.numeroCaja}`); // Texto que pondremos dentro del <p>
                tag.appendChild(text); //añadimos el texto a la etiqueta p creada
                let element = document.getElementById("pantallaConsola"); // almacenamos el elemento donde queremos guardar el p con su respectivo texto
                element.appendChild(tag); // añadimos texto al elemento.
            }
        }
}

