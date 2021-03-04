import { Injectable } from '@nestjs/common';
import { ItemToAdd } from 'src/interfaces';

@Injectable()
export class BasketService {
  public userBasket = [];

  addItem(item: ItemToAdd) {
    const ind: number = this.userBasket.push(item);
    console.log(this.userBasket);
    return ind - 1;
  }
  deleteItem(index: number) {
    const result: ItemToAdd[] = this.userBasket.splice(index, 1);
    console.log(this.userBasket);
    if (result === []) return false;
    return true;
  }
}
