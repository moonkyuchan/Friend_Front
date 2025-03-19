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
    id: "supplier",
    label: "제약사",
    type: "select",
    size: "small",
    options: ["녹십자웰빙", "녹십자화학", "녹십자화학", "녹십자화학"],
    required: true,
    gridSize: 12,
  },
  {
    id: "medicine",
    label: "의약품",
    type: "select",
    size: "small",
    required: true,
    options: ["VC", "영양제", "주사제", "소모품", "지씨비본"],
    gridSize: 12,
  },
  {
    id: "manager",
    label: "담당자",
    type: "select",
    size: "small",
    required: true,
    options: ["이기호","양영상","이강희","문규찬","서효민"],
    gridSize: 12,
  },
  {
    id: "transactionType",
    label: "입출고",
    type: "select",
    size: "small",
    required: true,
    options: ["입고", "출고"],
    gridSize: 12,
  },
  {
    id: "quantity",
    label: "수량",
    type: "text",
    size: "small",
    required: true,
    gridSize: 12,
  },
];