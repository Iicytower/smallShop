import { Injectable } from '@nestjs/common';
import { ItemInShop } from '../interfaces';

@Injectable()
export class ShopService {
  itemsList(): ItemInShop[] {
    const itemsListInShop: ItemInShop[] = [
      {
        name: 'CPU',
        description: 'very good CPU',
        priceNetto: 1500,
      },
      {
        name: 'GPU',
        description: 'very good GPU',
        priceNetto: 5500,
      },
      {
        name: 'Motherboard',
        description: 'very good motherboard',
        priceNetto: 850,
      },
    ];

    return itemsListInShop;
  }
}
