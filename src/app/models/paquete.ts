export class Paquete{
    constructor(
        public id_paquete: number,
        public nombre_paquete:string,
        public duracion_paquete_dias:number,
        public cantidad_personas:number,
        public descripcion:string,
        public edw_agencia_id_agencia:number
    ){}
}
