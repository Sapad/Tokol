export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  creted_at: Date;
  updated_at: Date;
  stock: [
    {
      size: string;
      stock: number;
    },
  ];
};
