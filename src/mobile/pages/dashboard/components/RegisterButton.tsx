import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const RegisterButton: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", mb: 4, mt: 3, justifyContent: "center" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAddDialogOpen(true)}
        size="medium"
        sx={{ width: "100%", fontSize: "20px" }}
      >
        상품등록
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
    </Box>
  );
};

export default RegisterButton;
