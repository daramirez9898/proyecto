export class Viajero{
    constructor(
        public id_viajero:number,
        public primer_nombre:string,
        public segundo_nombre:string,
        public primer_apellido:string,
        public segundo_apellido:string,
        public fecha_nacimiento: Date,
        public genero:string,
        public edw_ciudad_id_ciudad:number,
        public edw_ciudad_edw_pais_id_pais:number
    ){}
}

