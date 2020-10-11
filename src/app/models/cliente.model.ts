export class Cliente {

    constructor (
        public ci: string,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public created_at?: string,
        public updated_at?: string,
        public id?: number
    ) { }

}