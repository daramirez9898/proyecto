export class Atraccion{
    constructor(
        public id_atraccion:number,
        public nombre_atraccion:string,
        public descripcion_atraccion:string,
        public edw_ciudad_id_ciudad:number,
        public edw_ciudad_edw_pais_id_pais:number
    ){}
}