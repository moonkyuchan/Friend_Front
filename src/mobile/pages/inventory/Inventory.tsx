import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import ReceiveButton from "./components/ReceiveButton";
interface InventoryItem {
  id?: string;
  name: string;
  quantity: number;
  manager: string;
  date: string;
  status: "입고" | "출고";
}

const sampleData: InventoryItem[] = [
  {
    id: "1",
    name: "제품A",
    quantity: 100,
    manager: "김관리",
    date: "2024-03-20",
    status: "입고",
  },
  {
    id: "2",
    name: "제품B",
    quantity: -50,
    manager: "이담당",
    date: "2024-03-21",
    status: "출고",
  },
];

const Inventory: React.FC = () => {
  const [items] = useState<InventoryItem[]>(sampleData);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "15px 0",
          padding: "0 10px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          입출고 관리
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <ReceiveButton />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>품목명</TableCell>
              <TableCell>수량</TableCell>
              <TableCell>담당자</TableCell>
              <TableCell>날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell
                  sx={{
                    color:
                      item.status === "입고" ? "success.main" : "error.main",
                    fontWeight: "bold",
                  }}
                >
                  {item.quantity}
                </TableCell>
                <TableCell>{item.manager}</TableCell>
                <TableCell>{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Inventory;
