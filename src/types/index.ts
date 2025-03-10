export type Product = {
  id: number;
  name: string;
  category: string;
  standard: number;
  purchasePrice: number; // 입고가
  salePrice: number; // 판매가
  employeePrice: number; // 직원가
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "user";
};

export type Inventory = {
  id: number;
  product: Product;
  quantity: number;
  date: string;
  manager: User;
};
