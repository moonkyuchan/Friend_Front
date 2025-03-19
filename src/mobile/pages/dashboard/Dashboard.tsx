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
} from "@mui/material";
import RegisterButton from "./components/RegisterButton";
import DeleteButton from "./components/DeleteButton";
// import { getProduct } from "../../../lib/api";

// import { inventoryData, InventoryItem } from "./constants";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* 재고 현황 테이블 */}
      <Box sx={{ mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            padding: "0 10px",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            재고 현황
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <RegisterButton />
            <DeleteButton />
          </Box>
        </Box>
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
              {/* {inventoryData.map((item) => (
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
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
