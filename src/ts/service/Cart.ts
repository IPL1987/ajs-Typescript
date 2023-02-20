import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  sum(): number {
   return this._items.reduce(( sum, el ) => sum += el.price, 0)
  }

  discountSum(discount: number): number {
    return this.sum() * (1 - (discount / 100));
  }

  deleteItem(id: number): void {
    this._items.filter(item => item.id === id).splice(0, 1);
  }
}
