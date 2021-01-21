export class Cliente{
    constructor(
        public id_cliente:number,
        public nombre_cliente:string,
        public tipo:string,
        public apellido_1:string,
        public apellido_2:string,
        public asesor_viaje_id_asesor:number
    ){}
}