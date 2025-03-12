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
