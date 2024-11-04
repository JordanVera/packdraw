import { Account } from '@/types/Account';

export interface User {
  accounts: Account[];
  email: string;
  emailVerified: Date | null;
  id: string;
  image: string;
  name: string;
}
