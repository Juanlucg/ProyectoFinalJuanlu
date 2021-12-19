class cliente{
    constructor(num){
        this.numeroCliente = num; //Un identificador para un futuro
        this.tiempoCompra = Math.random() * (61 - 20) + 20; // Tiempo que el cliente va a gastar comprando
        this.tiempoEspera = Math.random() * (41 - 20) + 20; // TIempo que el cliente va a gastar en el proceso de compra
        this.totalPagar = Math.random() * (151 - 10) + 10; // Dinero que va a pagar por su compra.
    }
}