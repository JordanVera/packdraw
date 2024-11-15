import { Pack } from './Pack';
import { Item } from './Item';
import { User } from './User';

export interface OpenPack {
  id: string;
  isRealMoney: boolean;
  isRedeemed: boolean;
  packId: string;
  pack: Pack;
  winningItemId: string;
  item: Item;
  userId: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}
