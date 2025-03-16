
export interface Supplier {
  id: number; // 고유 ID
  company: string; // 회사명
  tel?: string; // 대표 연락처
  managers: Supplier_Manager[]; // 해당 공급업체 담당자들 정보
  products: Product_Info[]; // 해당 공급업체에 속해있는 의약품들
}

export interface Product_Info {
  id: number; // 고유 ID
  name: string; // 의약품 이름
  category: string[]; // 분류 (예: 감기약, 항생제 등)
  hira_type?: string[]; // 급여제품, 비급여제품, 인정비급여
  purchasePrice: number; // 입고가
  description?: string; // 설명
}

export interface Supplier_Manager {
  id: number; // 고유 ID  
  name: string; // 담당자 이름
  tel: string; // 담당자 연락처
  position?: string; // 직책
  assigned_region: string[]; // 담당 지역 enum 타입으로 정의
}
export interface Inventory_item {
  id: number; // 고유 ID
  name: string; // 의약품 이름
  supplier: Supplier[]; // (외래키)공급업체 ID
  quantity: number; // 재고 수량 (기본값: 0)
  standard?: number; // 안전수량 기준
}

  // salePrice?: number; // 판매가 (필요 시)
  // employeePrice?: number; // 직원가 (필요 시)
  // standard?: number; // 안전수량 기준
  // quantity: number; // 재고 수량 (기본값: 0)
  // supplier: Supplier[]; // (외래키) 공급업체 ID
  // manager: Supplier_Manager[]; // (외래키) 해당 공급업체 안에 속해있는 담당자

export interface ProductSupplier {
  product_id: number; // 의약품 ID (FK)
  supplier_id: number; // 공급업체 ID (FK)
  purchasePrice: number; // 입고가
  salePrice?: number; // 판매가 (필요 시)
  employeePrice?: number; // 직원가 (필요 시)
}
// export interface User {
//   id: number;
//   name: string;
//   email?: string;
//   password: string;
//   role: "superAdmin" | "admin" | "user";
// }

// export interface Inventory {
//   id: number;
//   product: Product;
//   date: string;
//   manager: User;
// }

// export interface InventoryItem {
//   id: number;
//   name: string;
//   category: string;
//   quantity: number;
//   status: "in-stock" | "low-stock" | "out-of-stock";
//   // css?: SxProps<Theme>;
// }
