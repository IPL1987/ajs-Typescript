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
    let total: number = 0;
    for (let i = 0; i < this._items.length; i += 1) {
      total += this._items[i].price;
    }
    return total
  }

  discountSum(discount: number): number {
    let total: number = 0;
    let discountTotal: number = 0;
    for (let i = 0; i < this._items.length; i += 1) {
      total += this._items[i].price;
      discountTotal = total - total / discount;
    }
    return discount
  }

  deleteItem(id: number): void {
    let index: number = 0;
    index = this._items.findIndex(item => item.id === id);
    this._items.splice(index, 1);
  }
}
