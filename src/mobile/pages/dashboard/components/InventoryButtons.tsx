import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";

const InventoryButtons: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", mb: 2, justifyContent: "space-between" }}>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setIsAddDialogOpen(true)}
      >
        상품등록
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        상품삭제
      </Button>

      {/* 상품등록 다이얼로그 */}
      <Dialog
        open={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>상품등록</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField fullWidth label="상품명" size="small" sx={{ mb: 2 }} />
            <TextField fullWidth label="카테고리" size="small" sx={{ mb: 2 }} />
            <TextField
              fullWidth
              label="수량"
              type="number"
              size="small"
              sx={{ mb: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)}>취소</Button>
          <Button variant="contained" onClick={() => setIsAddDialogOpen(false)}>
            등록
          </Button>
        </DialogActions>
      </Dialog>

      {/* 상품삭제 다이얼로그 */}
      <Dialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>상품삭제</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ mb: 2 }}>삭제할 상품을 선택해주세요.</Typography>
            <TextField fullWidth label="상품명" size="small" sx={{ mb: 2 }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>취소</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsDeleteDialogOpen(false)}
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default InventoryButtons;
