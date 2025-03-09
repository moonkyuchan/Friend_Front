import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  IconButton,
  Typography,
  // Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface InventoryItem {
  id?: string;
  name: string;
  quantity: number;
  manager: string;
  date: string;
  status: "입고" | "출고";
}

interface StockChange {
  id: number;
  type: "입고" | "출고";
  name: string;
  quantity: number;
  manager: string;
}

// // 상태별 설정
// const STATUS_CONFIG = {
//   정상: { color: "success" },
//   부족: { color: "warning" },
//   위험: { color: "error" },
//   품절: { color: "default" },
// } as const;

// const STATUS_OPTIONS = Object.keys(STATUS_CONFIG) as Array<
//   keyof typeof STATUS_CONFIG
// >;

const sampleData: InventoryItem[] = [
  {
    name: "제품A",
    quantity: 100,
    manager: "김관리",
    date: "2024-03-20",
    status: "입고",
  },
  {
    name: "제품B",
    quantity: -50,
    manager: "이담당",
    date: "2024-03-21",
    status: "출고",
  },
];

const Inventory: React.FC = () => {
  const [items] = useState<InventoryItem[]>(sampleData);
  const [open, setOpen] = useState(false);
  const [stockChanges, setStockChanges] = useState<StockChange[]>([]);

  const handleEditOpen = () => {
    setStockChanges([]); // 초기화
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStockChanges([]);
  };

  const handleSave = () => {
    // TODO: 여기서 stockChanges를 기반으로 items 업데이트 로직 구현
    console.log("Stock changes to apply:", stockChanges);
    handleClose();
  };

  const handleAddRow = (type: "입고" | "출고") => {
    const newId = Math.max(...stockChanges.map((item) => item.id), 0) + 1;
    setStockChanges([
      ...stockChanges,
      { id: newId, type, name: "", quantity: 0, manager: "" },
    ]);
  };

  const handleDeleteRow = (id: number) => {
    setStockChanges(stockChanges.filter((item) => item.id !== id));
  };

  const handleChangeRow = (
    id: number,
    field: keyof StockChange,
    value: string | number
  ) => {
    setStockChanges(
      stockChanges.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div style={{ padding: "0px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <h2>입출고 내역</h2>
        <Button variant="contained" size="small" onClick={handleEditOpen}>
          EDIT
        </Button>
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

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>재고 입출고 관리</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            {/* 입고 섹션 */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="h6">입고</Typography>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => handleAddRow("입고")}
                  size="small"
                >
                  입고 추가
                </Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>품명</TableCell>
                      <TableCell>수량</TableCell>
                      <TableCell>담당자</TableCell>
                      <TableCell>삭제</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stockChanges
                      .filter((item) => item.type === "입고")
                      .map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              value={item.name}
                              onChange={(e) =>
                                handleChangeRow(item.id, "name", e.target.value)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleChangeRow(
                                  item.id,
                                  "quantity",
                                  Number(e.target.value)
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              value={item.manager}
                              onChange={(e) =>
                                handleChangeRow(
                                  item.id,
                                  "manager",
                                  e.target.value
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteRow(item.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* 출고 섹션 */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Typography variant="h6">출고</Typography>
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => handleAddRow("출고")}
                  size="small"
                >
                  출고 추가
                </Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>품명</TableCell>
                      <TableCell>수량</TableCell>
                      <TableCell>담당자</TableCell>
                      <TableCell>삭제</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {stockChanges
                      .filter((item) => item.type === "출고")
                      .map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              value={item.name}
                              onChange={(e) =>
                                handleChangeRow(item.id, "name", e.target.value)
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleChangeRow(
                                  item.id,
                                  "quantity",
                                  Number(e.target.value)
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              fullWidth
                              size="small"
                              value={item.manager}
                              onChange={(e) =>
                                handleChangeRow(
                                  item.id,
                                  "manager",
                                  e.target.value
                                )
                              }
                            />
                          </TableCell>
                          <TableCell>
                            <IconButton
                              size="small"
                              onClick={() => handleDeleteRow(item.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSave} variant="contained">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Inventory;
