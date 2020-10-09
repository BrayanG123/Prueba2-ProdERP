export class Producto {

    constructor (
        public category_id: number,
        public nombre: string,
        public precio: string,
        public costo: string,
        public descripcion: string,
        public id?: number
    ) { }

}