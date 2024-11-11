import { Item } from './Item';

export interface PackItem {
  packId: string;
  itemId: string;
  quantity: string;
  item: Item;
}
