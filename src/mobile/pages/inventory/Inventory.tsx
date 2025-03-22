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
  Button,
} from "@mui/material";
import ReceiveDialog from "./components/ReceiveDialog";

const Inventory: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenDialog}
            size="medium"
          >
            입/출고 등록
          </Button>
        </Box>
      </Box>

      {/* 다이얼로그는 isDialogOpen 상태에 따라 조건부 렌더링 */}
      {isDialogOpen && (
        <ReceiveDialog open={isDialogOpen} onClose={handleCloseDialog} />
      )}

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
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Inventory;
