import Buyable from './Buyable';

export default class Moovie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originName: string,
    readonly year: number,
    readonly counry: string,
    readonly slogan: string,
    readonly style: string[],
    readonly time: string,
    readonly price: number,
  ) { }
}
