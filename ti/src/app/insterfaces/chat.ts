export interface IUser {
  created_at: string;
  email: string;
  email_verified_at?: string;
  id?: number;
  name: string;
  isOnline:boolean;
  updated_at?: string;
}

export interface IMessage {
  message: string;
  me?: boolean;
  from?: string;
}
