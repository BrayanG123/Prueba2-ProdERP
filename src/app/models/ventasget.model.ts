import { Ventaproductget } from './ventasproductget.model';

export class Ventaget {

    constructor (
        public id: number,
        public Total: number,
        public productos: Ventaproductget[],
    ) { }

}