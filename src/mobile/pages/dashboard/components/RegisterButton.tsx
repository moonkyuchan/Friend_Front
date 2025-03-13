import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Typography,
} from "@mui/material";

// import { Product } from "types";

// const inputData: Product = [
//   {
//     id: 1,
//     name: "지씨비본",
//     category: "VC",
//     type: "급여", //급여제품, 비급여제품
//     suppliers: { name: "녹십자웰빙", tel: "01011230234" }, // 공급업체
//     price: {
//       purchasePrice: "11230", // 입고가
//       salePrice: "23000", // 판매가
//       employeePrice: "22000", // 직원가
//     },
//     standard: 10, //안전수량기준
//   },
// ];

interface TextFieldConfig {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  size: "small" | "medium";
  required?: boolean;
  options?: string[];
  gridSize: number; // 12 기준 그리드 사이즈
}

const textFieldData: TextFieldConfig[] = [
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

const RegisterButton: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    // 로컬 스토리지에서 기존 데이터 가져오기
    const existingData = localStorage.getItem("products");
    const products = existingData ? JSON.parse(existingData) : [];

    // 새로운 상품 데이터 생성
    const newProduct = {
      id: Date.now(), // 임시 ID 생성
      ...formData,
      createdAt: new Date().toISOString(),
    };

    // 새로운 상품을 배열에 추가
    products.push(newProduct);

    // 로컬 스토리지에 저장
    localStorage.setItem("products", JSON.stringify(products));

    // 폼 초기화 및 다이얼로그 닫기
    setFormData({});
    setIsAddDialogOpen(false);
  };

  return (
    <Box sx={{ display: "flex", mb: 1, mt: 1 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAddDialogOpen(true)}
        size="medium"
      >
        상품등록
      </Button>

      <Dialog
        open={isAddDialogOpen}
        onClose={() => {
          setIsAddDialogOpen(false);
        }}
        maxWidth="md"
        fullScreen
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          상품등록
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {textFieldData.slice(0, 3).map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      // width: `calc(${(field.gridSize / 12) * 100}% - 16px)`,
                      width: "100%",
                    }}
                  >
                    {field.type === "select" ? (
                      <FormControl
                        fullWidth
                        size={field.size}
                        required={field.required}
                      >
                        <InputLabel>{field.label}</InputLabel>
                        <Select
                          value={formData[field.id] || ""}
                          label={field.label}
                          onChange={(e) =>
                            handleChange(field.id, e.target.value)
                          }
                        >
                          {field.options?.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <TextField
                        fullWidth
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        size={field.size}
                        required={field.required}
                        value={formData[field.id] || ""}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* 공급업체 정보 그룹 */}
            <Paper variant="outlined" sx={{ mt: 2, p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                공급업체 정보
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {textFieldData.slice(3, 8).map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      fullWidth
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      size={field.size}
                      required={field.required}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsAddDialogOpen(false);
              setFormData({});
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={
              !formData.name ||
              !formData.category ||
              !formData.type ||
              !formData.supplier ||
              !formData.purchasePrice
            }
          >
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RegisterButton;
