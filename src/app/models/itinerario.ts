export class Itinerario{
    constructor(
        public edw_paquete_id_paquete:number,
        public edw_ciudad_id_ciudad:number,
        public orden:number,
        public tiempo:number,
        public edw_paquete_edw_agencia_id_agencia:number,
        public edw_ciudad_edw_pais_id_pais: number
    ){}
}