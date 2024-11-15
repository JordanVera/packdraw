import { Account } from '@/types/Account';
import { OpenPack } from '@prisma/client';
export interface User {
  accounts: Account[];
  email: string;
  emailVerified: Date | null;
  id: string;
  image: string;
  name: string;
  balance: number;
  OpenPack: OpenPack[];
}
