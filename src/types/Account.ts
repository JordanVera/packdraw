export interface Account {
  access_token: string;
  expires_at: number;
  id: string;
  id_token: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  scope: string;
  session_state: string | null;
  token_type: string;
  type: string;
  userId: string;
}
