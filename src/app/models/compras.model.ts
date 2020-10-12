import { Compraprod } from "./compraprod.model";
import { Arreglo } from './arreglo.model';

export class Compra {
  constructor(
    public provider_id: number,
    public deposit_id: number,
    public productos: Compraprod[],
    public products?: Compraprod[],
    public id?: Number,
  ) {}
}
