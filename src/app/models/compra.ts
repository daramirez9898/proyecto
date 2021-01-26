export class Compra{
    constructor(
        public id_paquete:number,
        public fecha_viaje: Date,
        public email:string,
        public tipo_pago:string,
        public numero_cuenta:number,
        public id_banco:number,
        public id_cliente:number
    ){}
}
