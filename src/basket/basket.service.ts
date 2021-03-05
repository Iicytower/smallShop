import { Injectable, Inject } from '@nestjs/common';
import { ItemToAdd } from 'src/interfaces';
import { ShopService } from 'src/shop/shop.service';

@Injectable()
export class BasketService {
  public userBasket = [];

  constructor(
    @Inject(ShopService) private shopService: ShopService,
  ){}

  addItem(item: ItemToAdd): number {
    const ind: number = this.userBasket.push(item);
    return ind - 1;
  }
  deleteItem(index: number): boolean {
    const result: ItemToAdd[] = this.userBasket.splice(index, 1);
    if (result === []) return false;
    return true;
  }
  countTotalPrice(){
    const basket = this.userBasket

    const result = basket.reduce((acc: number, el: ItemToAdd) => {
      const price = this.shopService.itemPrice(el.name);

      acc += acc + price;
      return acc;
    }, 0);
    return result * 1.23;
  }
}
