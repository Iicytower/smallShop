import { Controller, Get, Inject } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ItemInShop } from "../interfaces";

@Controller('shop')
export class ShopController {
  constructor(
    @Inject(ShopService) private shopService: ShopService
  ){}

  @Get()
  itemsList(): ItemInShop[]{

    return this.shopService.itemsList();

  }
}
