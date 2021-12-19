function procesoCaja(cajaRegistradora){ // Funcion para abrir cajas al hacer click en ellas
    if(!cajaRegistradora.estado) // Si el estado es false (cerrada) -> la abre
      cajaRegistradora.cambiarEstado();
}

function crearCliente(contador){ //Esta funcion crea un objeto cliente y lanza la funcion asignarClienteCaja para introducir dicho cliente en el objeto cjaa
    let clienteAuxiliar = new cliente(contador); 
    asignarClienteCaja(clienteAuxiliar);
    // Con estas lineas cambiamos el contador de clientes totales que han pasado por el super mercado.
    let contadorAux = document.getElementById("contadorClientes").innerHTML;
    contadorAux = parseInt(contadorAux)+1;
    document.getElementById("contadorClientes").innerHTML = contadorAux;
  
}

function asignarClienteCaja(clienteAux){ // Funcion para asignar un cliente a una caja

    let control = false; // variable para controlar si se ha añadido o no
    let contador = 0; // contador para realizar el recorrido del array


    while(!control && contador <= 3){ // recorremos el array con un while para poder salir en cuanto encontremos un resultado positivo.
      if(cajas[contador].apta){ // Si es apta 
        cajas[contador].listaClientes.push(clienteAux); // añadimos cliente
        control = true; // digito de control a true para salir del bucle
        cajas[contador].aumentarContador(); // aumentamos el contador. Recordamos que este atributo es para mostrar la cantidad de clientes que hay esperando
        cajas[contador].tiempoTotalEspera += clienteAux.tiempoEspera; // Aqui añadimos el tiempo de espera en cola del cliente al total de la caja
      }
      contador++; // aumentamos contador para seguir recorriendo bucle en caso negativo.
    }
    // en el caso de que no encontremos una caja apta empezamos de 0.
    // Recorremos el array de cajas buscando una caja cerrada.
    // Abrimos la caja, y asignamos el cliente.
    contador = 0;

    while(!control && contador <= 3){ //Recorremos array

      if(cajas[contador].estado == false && cajas[contador].contadorCola < 4){ // Si la caja esta cerrada y la cantidad de clientes esperando es menor que 4 que añada un cliente. Esto lo hacemos por que sino, nunca va añadir mas de 4 clientes por caja y queremos que eso pase. 
          cajas[contador].cambiarEstado(); // Abrimos caja
          cajas[contador].listaClientes.push(clienteAux); //metemos cliente
          cajas[contador].aumentarContador(); // aumentamos el contador para mostrar la cantidad de clientes que hay esperando
          cajas[contador].tiempoTotalEspera += clienteAux.tiempoEspera; // Añadimos el tiempo de espera en cola del cliente al total de la caja
          control = true;
      }
      contador++;
    } 
    // Ya solo nos queda el caso de que todas las cajas esten abiertas y tengan 4 clientes. Por lo tanto lo que debemos hacer es comprobar que caja
    // es la que tiene menor tiempo de espera.

    while(!control){ // Vemos que no hemos conseguid añadir un cliente
      let arrayTiempos = []; // creamos un array numerico donde añadiremos tiempoTotalEspera, atributo de la clase caja que nos dicta el tiempo en s que van a atender a todos los clientes en cola.
      let indiceCaja = null; // En esta variable guardaremos el indice de la caja que menos tiempo total de espera tiene.

      // Recorremos el array de cajas e introducimos el tiempoTotalEspera de cada caja en el nuevo array
      for(let i = 0; i<=3; i++){

          arrayTiempos[i] = cajas[i].tiempoTotalEspera;          
      }

      //Aqui conseguimos el indnce con indexOf del menor valor que se encuentra en el arrayTiempos. Para ello usamos la funcion de Math.min.apply
      // esto nos va a sacar el valor menor de un array. por parametros tenemos que pasarle la funcion Math, y el array que queremos comparar.
      indiceCaja = arrayTiempos.indexOf(Math.min.apply(Math, arrayTiempos));
      cajas[indiceCaja].listaClientes.push(clienteAux); //añadimos cliente
      cajas[indiceCaja].aumentarContador();// aumentamos el contador para mostrar la cantidad de clientes que hay esperando
      cajas[indiceCaja].tiempoTotalEspera += clienteAux.tiempoEspera; // añadimos el tiempo de espera en cola del cliente al total de la caja.

      control = true; // lo hemos conseguido! por lo tanto pasamos el digito a true para salir del bucle

      // WIIIII CONGRATZ

    }    
} 



