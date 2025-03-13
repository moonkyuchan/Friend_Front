// import { SxProps, Theme } from "@mui/material";

export interface Product {
  id: number;
  name: string;
  category: string;
  type?: string[]; //급여제품, 비급여제품
  suppliers: { name: string; tel: number }; // 공급업체
  price?: {
    purchasePrice: number; // 입고가
    salePrice: number; // 판매가
    employeePrice: number; // 직원가
  };
  standard?: number | null; //안전수량기준
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "superAdmin" | "admin" | "user";
}

export interface Inventory {
  id: number;
  product: Product;
  quantity: number;
  date: string;
  manager: User;
}

export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
  // css?: SxProps<Theme>;
}
