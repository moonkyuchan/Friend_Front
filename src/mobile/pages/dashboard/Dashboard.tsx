import React from "react";
import {
  Paper,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import RegisterButton from "./components/RegisterButton";

// 테이블 데이터 타입 정의
interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

// 샘플 데이터
const inventoryData: InventoryItem[] = [
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

const Dashboard: React.FC = () => {
  const getStatusChip = (status: InventoryItem["status"]) => {
    const statusConfig = {
      "in-stock": { label: "재고있음", color: "success" },
      "low-stock": { label: "부족", color: "warning" },
      "out-of-stock": { label: "재고없음", color: "error" },
    } as const;

    const config = statusConfig[status];
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <RegisterButton />
      {/* 재고 현황 테이블 */}
      <Box sx={{ mt: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          재고 현황
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ tableLayout: "fixed" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "40%" }}>제품명</TableCell>
                <TableCell align="center" sx={{ width: "20%" }}>
                  수량
                </TableCell>
                <TableCell align="center" sx={{ width: "30%" }}>
                  상태
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    sx={{
                      width: "40%",
                      whiteSpace: "nowrap",
                      overflow: "auto",
                    }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "20%",
                      whiteSpace: "nowrap",
                      overflow: "auto",
                    }}
                  >
                    {item.quantity}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      width: "30%",
                      whiteSpace: "nowrap",
                      overflow: "auto",
                    }}
                  >
                    {getStatusChip(item.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
