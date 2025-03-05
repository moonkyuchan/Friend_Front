import React from "react";
import {
  Grid,
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
  lastUpdated: string;
}

// 샘플 데이터
const inventoryData: InventoryItem[] = [
  {
    id: 1,
    name: "상품 A",
    category: "전자기기",
    quantity: 150,
    status: "in-stock",
    lastUpdated: "2024-03-15",
  },
  {
    id: 2,
    name: "상품 B",
    category: "의류",
    quantity: 20,
    status: "low-stock",
    lastUpdated: "2024-03-14",
  },
  {
    id: 3,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
  },
  {
    id: 4,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
  },
  {
    id: 5,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
  },
  {
    id: 6,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
  },
  {
    id: 7,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
  },
  {
    id: 8,
    name: "상품 C",
    category: "식품",
    quantity: 0,
    status: "out-of-stock",
    lastUpdated: "2024-03-13",
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
        </Grid>
      </Grid>

      {/* 재고 현황 테이블 */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          재고 현황
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>제품명</TableCell>
                <TableCell>카테고리</TableCell>
                <TableCell align="right">수량</TableCell>
                <TableCell>상태</TableCell>
                <TableCell>최종 업데이트</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventoryData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell>{getStatusChip(item.status)}</TableCell>
                  <TableCell>{item.lastUpdated}</TableCell>
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
