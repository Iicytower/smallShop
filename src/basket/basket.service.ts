import { Injectable } from '@nestjs/common';
import { ItemToAdd } from 'src/interfaces';

@Injectable()
export class BasketService {
  public userBasket = [];

  addItem(item: ItemToAdd) {
    this.userBasket.push(item);
    console.log(this.userBasket);
    return this.userBasket;
  }
}
