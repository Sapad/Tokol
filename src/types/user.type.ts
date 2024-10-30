export type User = {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  image: string;
  role: string;
  updated_at: Date;
  created_at: Date;
  password?: string;
  type?: string;
};
