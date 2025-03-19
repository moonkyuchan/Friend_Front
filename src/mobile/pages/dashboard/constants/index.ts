
export interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

export const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "상품 A",
    category: "전자기기",
    quantity: 150,
    status: "in-stock",
  },
  {
    id: 2,
    name: "상품 B",
    category: "의류",
    quantity: 20,
    status: "low-stock",
  },
  {
    id: 3,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 4,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 5,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 6,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 7,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 8,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 9,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 10,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 11,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 12,
    name: "상품 C상품 C상품 C상품 C상품 C상품 C상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 13,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 14,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 15,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  {
    id: 16,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
  },
  // ... 기존 대시보드 코드 ...
];

interface TextFieldConfig {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  size: "small" | "medium";
  required?: boolean;
  options?: string[];
  gridSize: number; // 12 기준 그리드 사이즈
}

export const textFieldData: TextFieldConfig[] = [
  {
    id: "name",
    label: "상품명",
    type: "text",
    size: "small",
    required: true,
    gridSize: 12,
  },
  {
    id: "category",
    label: "카테고리",
    type: "select",
    size: "small",
    required: true,
    options: ["VC", "영양제", "주사제", "소모품", "건기식"],
    gridSize: 6,
  },
  {
    id: "type",
    label: "구분",
    type: "select",
    size: "small",
    required: true,
    options: ["급여", "비급여"],
    gridSize: 6,
  },
  {
    id: "supplier",
    label: "제조/유통업체",
    type: "text",
    size: "small",
    required: true,
    gridSize: 12,
  },
  {
    id: "tel",
    label: "연락처",
    type: "text",
    size: "small",
    gridSize: 12,
  },
  {
    id: "purchasePrice",
    label: "입고가",
    type: "number",
    size: "small",
    required: true,
    gridSize: 12,
  },
  {
    id: "salePrice",
    label: "판매가",
    type: "number",
    size: "small",
    gridSize: 12,
  },
  {
    id: "employeePrice",
    label: "직원가",
    type: "number",
    size: "small",
    gridSize: 12,
  },
];