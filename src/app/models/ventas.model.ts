import { Ventaproduct } from './ventaproduct.model';

export class Venta {

    constructor (
        public client_id: number,
        public payment_id: number,
        public products: Ventaproduct[],
        // public id?: string
    ) { }

}