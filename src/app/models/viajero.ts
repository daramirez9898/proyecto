export class Viajero{
    constructor(
        public id_viajero:number,
        public primer_nombre:string,
        public primer_apellido:string,
        public segundo_apellido:string,
        public fecha_nacimiento: Date,
        public genero:string,
        public id_ciudad:number,
        public id_pais:number
    ){}
}

