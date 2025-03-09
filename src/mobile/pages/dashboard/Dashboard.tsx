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
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 140,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              총 재고 수량
            </Typography>
            <Typography component="p" variant="h4">
              3,024
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 140,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              금일 입고
            </Typography>
            <Typography component="p" variant="h4">
              156
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 140,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              금일 출고
            </Typography>
            <Typography component="p" variant="h4">
              87
            </Typography>
          </Paper>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%", lg: "25%" } }}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 140,
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              재고 부족 알림
            </Typography>
            <Typography component="p" variant="h4">
              12
            </Typography>
          </Paper>
        </Box>
      </Box> */}

      {/* 재고 현황 테이블 */}
      <Box sx={{ mt: 1 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          재고 현황
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제품명</TableCell>
                <TableCell>카테고리</TableCell>
                <TableCell>수량</TableCell>
                <TableCell>상태</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{getStatusChip(item.status)}</TableCell>
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
